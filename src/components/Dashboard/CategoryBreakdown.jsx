import { useData } from '../../contexts/DataContext.jsx';
import { formatINR } from '../../utils/currency.js';
import { useRef, useEffect } from 'react';

const COLORS = [
  '#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#3b82f6',
  '#ec4899', '#14b8a6', '#f97316', '#8b5cf6', '#06b6d4',
];

export default function CategoryBreakdown() {
  const { financials } = useData();
  const { categoryBreakdown, totalSpent } = financials;
  const canvasRef = useRef(null);

  const categories = Object.entries(categoryBreakdown)
    .sort(([, a], [, b]) => b - a);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || categories.length === 0) return;

    const ctx = canvas.getContext('2d');
    const size = canvas.width;
    const center = size / 2;
    const radius = size / 2 - 12;
    const innerRadius = radius * 0.6;

    ctx.clearRect(0, 0, size, size);

    let startAngle = -Math.PI / 2;
    categories.forEach(([, amount], i) => {
      const slice = (amount / totalSpent) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(center, center, radius, startAngle, startAngle + slice);
      ctx.arc(center, center, innerRadius, startAngle + slice, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.fill();
      startAngle += slice;
    });

    // Center text
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim() || '#fff';
    ctx.font = '600 14px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(formatINR(totalSpent), center, center - 8);
    ctx.font = '400 11px Inter';
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() || '#94a3b8';
    ctx.fillText('Total Spent', center, center + 10);
  }, [categories, totalSpent]);

  if (categories.length === 0) {
    return (
      <div className="glass-card category-breakdown">
        <h3 className="section-title">Spending by Category</h3>
        <p className="empty-state">No expenses recorded yet</p>
      </div>
    );
  }

  return (
    <div className="glass-card category-breakdown">
      <h3 className="section-title">Spending by Category</h3>
      <div className="category-chart-grid">
        <canvas ref={canvasRef} width={180} height={180} className="donut-chart" />
        <div className="category-legend">
          {categories.map(([cat, amount], i) => (
            <div key={cat} className="legend-item">
              <span className="legend-dot" style={{ background: COLORS[i % COLORS.length] }} />
              <span className="legend-label">{cat}</span>
              <span className="legend-value">{formatINR(amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
