import React from "react";
import "./index.css";

export default function index({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <div className="card-info">
                        <h3>{data}</h3>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
