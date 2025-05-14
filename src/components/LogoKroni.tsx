import React from 'react';
import logoKroniAzul from '../assets/logo-kroni-azul.png';
import logoKroniMorado from '../assets/logo-kroni-morado.png';

interface LogoKroniProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  variant?: 'azul' | 'morado';
}

const LogoKroni: React.FC<LogoKroniProps> = ({ width = 80, height = 80, className = '', variant = 'azul' }) => (
  <img
    src={variant === 'morado' ? logoKroniMorado : logoKroniAzul}
    alt="Logo Kroni"
    width={width}
    height={height}
    className={className}
    style={{ display: 'block', objectFit: 'contain' }}
  />
);

export default LogoKroni; 