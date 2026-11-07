function StatusBadge({isActive}) {
    return (
        <p>Status: {isActive ? "Active" : "OnPause"}</p>
    )
}

export default StatusBadge;