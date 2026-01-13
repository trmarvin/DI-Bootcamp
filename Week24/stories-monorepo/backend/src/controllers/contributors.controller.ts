import type { Request, Response, NextFunction } from "express";
import { createContributor, getContributorByUsername } from "../models/contributors.model";

export const addContributor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // 1) Read inputs
        const { username, contributions } = req.body;

        // 2) Validate inputs (super basic)
        if (!username) {
            return res.status(400).json({ ok: false, error: { message: "username is required" } });
        }
        if (contributions === undefined || contributions === null) {
            return res.status(400).json({ ok: false, error: { message: "contributions is required" } });
        }

        // 3) Call model
        const contributor = await createContributor(String(username), Number(contributions));
        if (!contributor) {
            return res.status(409).json({ ok: false, error: { message: "username already exists" } });
        }

        // 4) Return response
        return res.status(201).json({ ok: true, data: contributor });
    } catch (err) {
        return next(err);
    }
};  

export const getContributor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // 1) Read inputs
        const { username } = req.params;

        // 2) Validate inputs
        if (!username) {
            return res.status(400).json({ ok: false, error: { message: "username is required" } });
        }

        // 3) Call model
        const contributor = await getContributorByUsername(String(username));
        if (!contributor) {
            return res.status(404).json({ ok: false, error: { message: "contributor not found" } });
        }

        // 4) Return response
        return res.status(200).json({ ok: true, data: contributor });
    } catch (err) {
        return next(err);
    }
};