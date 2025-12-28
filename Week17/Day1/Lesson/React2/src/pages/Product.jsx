import React from "react";
import { useParams } from 'react-router'

export default function Product() {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout() => {
            navigate('/');
        }
    }
    )

    return (
        <div>
            <h2>Product #{params.id}</h2>
        </div>
    )
}