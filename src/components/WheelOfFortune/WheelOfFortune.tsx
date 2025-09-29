import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import "./WheelOfFortune.scss";

interface Prize {
  id: number;
  name: string;
  color: string;
}

const prizes: Prize[] = [
  { id: 1, name: "100 Coins", color: "#FF0000" },
  { id: 2, name: "50 Coins", color: "#0000FF" },
  { id: 3, name: "Free Spin", color: "#00FF00" },
  { id: 4, name: "25 Coins", color: "#FFFF00" },
  { id: 5, name: "Bonus Round", color: "#FF00FF" },
  { id: 6, name: "10 Coins", color: "#00FFFF" },
  { id: 7, name: "Jackpot", color: "#FF6B35" },
  { id: 8, name: "5 Coins", color: "#4ECDC4" },
];

const WheelOfFortune: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);

  const handleSpin = (): void => {
    if (isSpinning) return;
    setIsSpinning(true);
    setShowResult(false);

    const extraRotations = Math.floor(Math.random() * 6) + 5;
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = rotation + extraRotations * 360 + randomDegree;
    setRotation(totalRotation);

    setTimeout(() => {
      const normalizedRotation = totalRotation % 360;
      const segmentAngle = 360 / prizes.length;
      const pointerAngle = (360 - (normalizedRotation % 360)) % 360;
      const winningIndex =
        Math.floor(pointerAngle / segmentAngle) % prizes.length;

      setWonPrize(prizes[winningIndex]);
      setIsSpinning(false);
      setShowResult(true);
    }, 4000);
  };

  const segmentAngle = 360 / prizes.length;

  return (
    <div className="wheel-of-fortune">
      <h1 className="wheel-of-fortune__title">🎰 Wheel of Fortune 🎰</h1>

      <div className="wheel-of-fortune__game-area">
        <div className="wheel-of-fortune__pointer"></div>

        <div className="wheel-of-fortune__wheel-wrapper">
          <svg
            viewBox="0 0 200 200"
            className={`wheel-of-fortune__wheel ${
              isSpinning ? "wheel-of-fortune__wheel--spinning" : ""
            }`}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {prizes.map((prize, index) => {
              const startAngle = index * segmentAngle - 90;
              const endAngle = startAngle + segmentAngle;

              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;

              const x1 = 100 + 95 * Math.cos(startRad);
              const y1 = 100 + 95 * Math.sin(startRad);
              const x2 = 100 + 95 * Math.cos(endRad);
              const y2 = 100 + 95 * Math.sin(endRad);

              const textAngle = startAngle + segmentAngle / 2;
              const textRad = (textAngle * Math.PI) / 180;
              const textX = 100 + 65 * Math.cos(textRad);
              const textY = 100 + 65 * Math.sin(textRad);

              return (
                <g key={prize.id}>
                  <path
                    d={`M 100 100 L ${x1} ${y1} A 95 95 0 0 1 ${x2} ${y2} Z`}
                    fill={prize.color}
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <text
                    x={textX}
                    y={textY}
                    fill="#000"
                    fontSize="8"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textAngle + 180}, ${textX}, ${textY})`}
                  >
                    {prize.name}
                  </text>
                </g>
              );
            })}
            <circle
              cx="100"
              cy="100"
              r="18"
              fill="#FFD700"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSpin}
            disabled={isSpinning}
            className="wheel-of-fortune__spin-button"
          >
            {isSpinning ? "SPINNING" : "SPIN"}
          </Button>
        </div>
      </div>

      <Dialog
        open={showResult}
        onClose={() => setShowResult(false)}
        maxWidth="sm"
        fullWidth
        className="wheel-of-fortune__dialog"
      >
        <DialogTitle className="wheel-of-fortune__dialog-title">
          🎉 Congratulations! 🎉
        </DialogTitle>
        <DialogContent className="wheel-of-fortune__dialog-content">
          <div
            className="wheel-of-fortune__prize-text"
            style={{ color: wonPrize?.color }}
          >
            You won: {wonPrize?.name}
          </div>
        </DialogContent>
        <DialogActions className="wheel-of-fortune__dialog-actions">
          <Button
            onClick={() => setShowResult(false)}
            variant="contained"
            color="primary"
            size="large"
            className="wheel-of-fortune__claim-button"
          >
            Claim Prize
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default WheelOfFortune;
