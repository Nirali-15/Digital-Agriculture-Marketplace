import React, { useState } from 'react';

const BuyerRequest = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      buyerName: 'Rohit Sharma',
      product: 'Fresh Tomatoes',
      quantity: '50 kg',
      date: '2025-07-01',
      status: 'Pending',
    },
    {
      id: 2,
      buyerName: 'Anjali Mehta',
      product: 'Organic Rice',
      quantity: '100 kg',
      date: '2025-06-28',
      status: 'Accepted',
    },
    {
      id: 3,
      buyerName: 'Karan Patel',
      product: 'Cow Milk',
      quantity: '30 L',
      date: '2025-06-25',
      status: 'Rejected',
    },
  ]);

  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAction = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  const filteredRequests = requests.filter((req) => {
    const matchesStatus = filter === 'All' || req.status === filter;
    const matchesSearch =
      req.buyerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.product.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f9f9fb',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
    },
    title: {
      textAlign: 'center',
      color: '#2e7d32',
      fontSize: '2.2rem',
      marginBottom: '1.5rem',
    },
    controls: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1.5rem',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    searchInput: {
      padding: '10px',
      width: '250px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '14px',
    },
    filterSelect: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '14px',
    },
    tableWrapper: {
      overflowX: 'auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      minWidth: '700px',
    },
    th: {
      padding: '14px 16px',
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    td: {
      padding: '14px 16px',
      borderBottom: '1px solid #eee',
      textAlign: 'center',
      fontSize: '0.95rem',
    },
    statusBadge: {
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    pending: {
      backgroundColor: '#fff3cd',
      color: '#856404',
    },
    accepted: {
      backgroundColor: '#d4edda',
      color: '#155724',
    },
    rejected: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
    },
    actionBtn: {
      padding: '6px 12px',
      border: 'none',
      borderRadius: '5px',
      margin: '0 4px',
      fontSize: '0.85rem',
      cursor: 'pointer',
    },
    accept: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    reject: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    view: {
      backgroundColor: '#007bff',
      color: 'white',
    },
    noRecords: {
      textAlign: 'center',
      padding: '20px',
      color: '#888',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Buyer Requests</h2>

      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search by buyer or product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <select
          style={styles.filterSelect}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Buyer Name</th>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((req) => (
                <tr key={req.id}>
                  <td style={styles.td}>{req.buyerName}</td>
                  <td style={styles.td}>{req.product}</td>
                  <td style={styles.td}>{req.quantity}</td>
                  <td style={styles.td}>{req.date}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        ...styles[req.status.toLowerCase()],
                      }}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td style={styles.td}>
                    {req.status === 'Pending' ? (
                      <>
                        <button
                          style={{ ...styles.actionBtn, ...styles.accept }}
                          onClick={() => handleAction(req.id, 'Accepted')}
                        >
                          Accept
                        </button>
                        <button
                          style={{ ...styles.actionBtn, ...styles.reject }}
                          onClick={() => handleAction(req.id, 'Rejected')}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <button style={{ ...styles.actionBtn, ...styles.view }}>
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={styles.noRecords} colSpan="6">
                  No matching requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerRequest;
