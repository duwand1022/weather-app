interface HistoryListProps {
  history: Array<{ city: string; country?: string }>;
  onSelect: (city: string, country?: string) => void;
}

export const HistoryList = ({ history, onSelect }: HistoryListProps) => {
  if (history.length === 0) return null;

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h3 style={{ marginTop: 0 }}>Search History</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {history.map((item, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <button
              onClick={() => onSelect(item.city, item.country)}
              style={{
                background: 'none',
                border: 'none',
                color: '#0645AD',
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
              }}
            >
              {item.city}
              {item.country ? `, ${item.country}` : ''}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
