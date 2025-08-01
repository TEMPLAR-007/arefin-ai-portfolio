import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: "#0A0A0F",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#4F46E5", // Indigo
					foreground: "#FFFFFF",
				},
				secondary: {
					DEFAULT: "#12121A",
					foreground: "#FFFFFF",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "#12121A",
					foreground: "#A1A1AA",
				},
				accent: {
					DEFAULT: "#6366F1", // Lighter indigo
					foreground: "#FFFFFF",
				},
				popover: {
					DEFAULT: "#12121A",
					foreground: "#FFFFFF",
				},
				card: {
					DEFAULT: "#12121A",
					foreground: "#FFFFFF",
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: "0.75rem",
				md: "0.5rem",
				sm: "0.375rem",
				xl: "1rem"
			},
			backgroundImage: {
				'hero-gradient': 'var(--hero-gradient)',
				'card-gradient': 'var(--card-gradient)',
			},
			boxShadow: {
				'tech-glow': 'var(--tech-glow)',
				'ai-glow': 'var(--ai-glow)',
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'custom-bezier': 'cubic-bezier(0.19, 1, 0.22, 1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'card-enter': {
					'from': {
						opacity: '0',
						transform: 'translateY(100px) scale(0.95)',
						visibility: 'hidden'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						visibility: 'visible'
					}
				},
				'fadeIn': {
					'from': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				gradient: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'card-enter': 'card-enter 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards',
				'fade-in': 'fadeIn 0.8s ease forwards',
				'gradient': 'gradient 8s ease-in-out infinite'
			},
			utilities: {
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.perspective-1000': {
					'perspective': '1000px',
					'transform-style': 'preserve-3d',
				},
				'.transform-gpu': {
					'transform': 'translate3d(0, 0, 0)',
				},
				'.will-change-transform': {
					'will-change': 'transform',
				},
				'.visible': {
					'visibility': 'visible',
				},
				'.invisible': {
					'visibility': 'hidden',
				}
			}
		}
	},
	plugins: [animate],
} satisfies Config;
