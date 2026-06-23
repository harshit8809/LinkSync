import { CHANNELS } from "@/src/constent/dummyData";

const CHIP_W = 92;
const CHIP_H = 36;
const FOCAL = { x: 300, y: 330 };

function ConfluenceDiagram() {
  return (
    <svg viewBox="0 0 600 480" className="h-auto w-full" aria-hidden="true">
      {CHANNELS.map((ch) => {
        const bx = ch.x + CHIP_W / 2;
        const by = ch.y + CHIP_H;
        const d = `M${bx},${by} C${bx},${by + 70} ${FOCAL.x},${FOCAL.y - 70} ${FOCAL.x},${FOCAL.y}`;
        return (
          <path
            key={ch.name}
            d={d}
            fill="none"
            stroke={ch.color}
            strokeWidth={2}
            strokeOpacity={0.55}
            className="confluence-path"
          />
        );
      })}

      <circle cx={FOCAL.x} cy={FOCAL.y} r={7} fill="var(--amber)" className="confluence-pulse" />

      <rect x={170} y={330} width={260} height={130} rx={20} fill="#FFFFFF" stroke="var(--hairline)" strokeWidth={1.5} />
      <circle cx={205} cy={364} r={18} fill="var(--teal)" />
      <text x={205} y={369} textAnchor="middle" fontSize="14" fill="#fff" className="font-display">
        M
      </text>
      <text x={234} y={361} fontSize="14" fontWeight={600} fill="var(--ink)" className="font-body">
        Maya Chen
      </text>
      <text x={234} y={378} fontSize="11" fill="var(--ink-soft)" className="font-mono">
        linksync.app/mayachen
      </text>

      {[0, 1, 2].map((i) => {
        const ry = 398 + i * 20;
        const dotColor = [CHANNELS[0].color, CHANNELS[2].color, CHANNELS[3].color][i];
        return (
          <g key={i}>
            <rect x={190} y={ry} width={220} height={14} rx={7} fill="#FFFFFF" stroke="var(--hairline)" />
            <circle cx={200} cy={ry + 7} r={3.5} fill={dotColor} />
          </g>
        );
      })}

      {CHANNELS.map((ch) => (
        <g key={ch.name}>
          <rect
            x={ch.x}
            y={ch.y}
            width={CHIP_W}
            height={CHIP_H}
            rx={10}
            fill={`${ch.color}1A`}
            stroke={ch.color}
            strokeOpacity={0.5}
          />
          <text
            x={ch.x + CHIP_W / 2}
            y={ch.y + CHIP_H / 2 + 4}
            textAnchor="middle"
            fontSize="11"
            fill={ch.color}
            className="font-mono"
          >
            {ch.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default ConfluenceDiagram;