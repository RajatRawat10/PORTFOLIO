import React from 'react';

export const ContributionGraph = ({ contributions }) => {
  if (!contributions || !contributions.days) {
    return null;
  }

  const { total, days } = contributions;

  // GitHub contribution colors based on levels (0-4)
  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'var(--graph-level-1, #0e4429)';
      case 2:
        return 'var(--graph-level-2, #006d32)';
      case 3:
        return 'var(--graph-level-3, #26a641)';
      case 4:
        return 'var(--graph-level-4, #39d353)';
      default:
        return 'var(--graph-level-0, var(--border-color))';
    }
  };

  const containerStyle = {
    padding: '1.5rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--shadow-sm)',
    width: '100%',
    overflowX: 'auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(7, 10px)',
    gridAutoFlow: 'column',
    gap: '3px',
    minWidth: '700px',
    marginTop: '1rem'
  };

  const cellStyle = (level) => ({
    width: '10px',
    height: '10px',
    backgroundColor: getLevelColor(level),
    borderRadius: '2px',
    transition: 'all var(--transition-fast)'
  });

  return (
    <div style={containerStyle} className="contribution-graph-card">
      <style>{`
        :root {
          /* Light theme graph colors */
          --graph-level-0: light-dark(hsl(210, 15%, 90%), hsl(220, 20%, 18%));
          --graph-level-1: light-dark(#9be9a8, #0e4429);
          --graph-level-2: light-dark(#40c463, #006d32);
          --graph-level-3: light-dark(#30a14e, #26a641);
          --graph-level-4: light-dark(#216e39, #39d353);
        }
        .contrib-cell:hover {
          transform: scale(1.3);
          outline: 1px solid var(--color-accent);
          z-index: 10;
        }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontWeight: '700' }}>GitHub Contributions</h4>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', fontWeight: '600' }}>
          {total} contributions in the last year
        </span>
      </div>

      <div style={gridStyle} className="contribution-grid">
        {days.map((day, idx) => (
          <div
            key={idx}
            style={cellStyle(day.level)}
            className="contrib-cell"
            title={`${day.count} commits on ${day.date}`}
          />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '5px', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
        <span>Less</span>
        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--graph-level-0)', borderRadius: '2px' }} />
        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--graph-level-1)', borderRadius: '2px' }} />
        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--graph-level-2)', borderRadius: '2px' }} />
        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--graph-level-3)', borderRadius: '2px' }} />
        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--graph-level-4)', borderRadius: '2px' }} />
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;
