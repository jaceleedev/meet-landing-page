'use client';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant: ButtonVariant;
  primaryText: string;
  secondaryText?: string;
  onClick?: () => void;
}

function Button({
  variant,
  primaryText,
  secondaryText,
  onClick,
}: Readonly<ButtonProps>) {
  const baseStyle =
    'flex justify-center items-center gap-1 text-button rounded-[29px]';
  const variantStyle = {
    primary: 'bg-primary-teal hover:bg-[#71C0D4]',
    secondary: 'bg-secondary-purple hover:bg-[#B18BDD]',
  };
  const secondaryTextColor =
    variant === 'primary'
      ? 'text-accent-light-blue'
      : 'text-accent-light-purple';
  const paddingStyle = secondaryText ? 'px-10 py-4' : 'px-[29px] py-4';

  function handleClick() {
    if (onClick) {
      onClick();
    } else {
      console.log(`Button clicked, but no onClick handler provided`);
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyle} ${variantStyle[variant]} ${paddingStyle}`}
    >
      <span className="text-white">{primaryText}</span>
      {secondaryText && (
        <span className={secondaryTextColor}>{secondaryText}</span>
      )}
    </button>
  );
}

export default Button;
