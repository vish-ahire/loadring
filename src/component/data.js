export const initialLoaders = [
  {
    id: 1,
    name: "Spinner",
    preview: (
      <div className="spinner">
        <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    ),
    html: "<div className='spinner'></div>",
    css: `
    .spinner {
        width: 4rem;            
        height: 4rem;           
        border-top: 4px solid #3b82f6;
        border-radius: 9999px;  
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }`,
  },
  {
    id: 2,
    name: "Bounce balls",
    preview: (
        <div class="flex justify-center items-center h-12">
        <div class="w-4 h-4 rounded-full bg-blue-500 mx-1 animate-bounce"></div>
        <div class="w-4 h-4 rounded-full bg-blue-500 mx-1 animate-bounce delay-200"></div>
        <div class="w-4 h-4 rounded-full bg-blue-500 mx-1 animate-bounce delay-400"></div>
      </div>
    ),
    html: ` 
    <div className="bounce-container">
        <div className="bounce"></div>
        <div className="bounce ball2"></div>
        <div className="bounce ball3"></div>
    </div>`,
    css: `.bounce-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
  .bounce {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #007bff;
  margin: 0 5px;
  animation: bounce 0.6s infinite alternate;
}

.bounce .ball2 {
  animation-delay: 0.2s;
}

.bounce .ball3 {
  animation-delay: 0.4s;
}

@keyframes bounce {
  to {
    transform: translateY(-20px);
  }
}`,
  },
  {
    id: 3,
    name: "Fading Circle",
    preview: (
        <div className="flex justify-center items-center h-12">
        <div className="w-4 h-4 rounded-full bg-blue-500 mx-1 animate-fade opacity-0"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 mx-1 animate-fade opacity-0 delay-200"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 mx-1 animate-fade opacity-0 delay-400"></div>
      </div>      
    ),
    html: `<div class="circle-container">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
    </div>`,
    css: `.circle-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
            }
            .circle {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #007bff;
                margin: 0 5px;
                animation: fade 0.8s infinite alternate;
                opacity: 0;
            }
            .circle2 { animation-delay: 0.2s; }
            .circle3 { animation-delay: 0.4s; }
            @keyframes fade {
                to { opacity: 1; }
            }`,
  },
  {
    id: 4,
    name: "Pulse",
    preview: (
      <div className="w-10 h-10 rounded-full bg-blue-500 animate-pulse"></div>
    ),
    html: `<div className="pulse"></div>`,
    css: `.pulse {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
  }
}`,
  },
  {
    id: 5,
    name: "Bar",
    preview: (
      <div className="flex justify-center items-center h-12">
        <div className="w-2 h-6 bg-blue-500 mx-1 animate-stretch"></div>
        <div className="w-2 h-6 bg-blue-500 mx-1 animate-stretch delay-400"></div>
        <div className="w-2 h-6 bg-blue-500 mx-1 animate-stretch delay-800"></div>
      </div>
    ),
    html: `<div className="bar-container">
        <div className="bar"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
    </div>`,
    css: `.bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.bar {
  width: 8px;
  height: 24px;
  background-color: #007bff;
  margin: 0 4px;
  animation: stretch 1.2s infinite alternate;
  transform-origin: bottom;
}

.bar .bar2 {
  animation-delay: 0.4s;
}

.bar .bar3 {
  animation-delay: 0.8s;
}

@keyframes stretch {
  to {
    transform: scaleY(0.4);
  }
}`,
  },
  {
    id: 6,
    name: "SquareSpin",
    preview: (
      <div className="w-10 h-10 border-4 border-blue-500 animate-square-spin"></div>
    ),
    html: `<div className="square-spin"></div>`,
    css: `.square-spin {
  width: 40px;
  height: 40px;
  animation: square-spin 2s infinite linear;
  border: 4px solid #007bff;
}

@keyframes square-spin {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: 7,
    name: "DotPulse",
    preview: (
      <div className="flex justify-center items-center">
        <div className="w-3 h-3 rounded-full bg-blue-500 mx-2 animate-dot-pulse"></div>
        <div className="w-3 h-3 rounded-full bg-blue-500 mx-2 animate-dot-pulse delay-200"></div>
        <div className="w-3 h-3 rounded-full bg-blue-500 mx-2 animate-dot-pulse delay-400"></div>
      </div>
    ),
    html: ` <div className="dot-pulse">
      <div className="dot-pulse dot1"></div>
      <div className="dot-pulse dot2"></div>
      <div className="dot-pulse dot3"></div>
    </div>`,
    css: `.dot-pulse {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot-pulse .dot1,
.dot-pulse .dot2,
.dot-pulse .dot3 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #007bff;
  margin: 0 8px;
  animation: dot-pulse 1.5s infinite ease-in-out;
}

.dot-pulse .dot2 {
  animation-delay: 0.2s;
}

.dot-pulse .dot3 {
  animation-delay: 0.4s;
}

@keyframes dot-pulse {
  0%,
  40%,
  100% {
    transform: scale(0);
  }
  20% {
    transform: scale(1);
  }
}`,
  },
  {
    id: 8,
    name: "CircleLoader ",
    preview: <div class="w-12 h-12 rounded-full border-3 border-transparent border-t-4 border-t-blue-500 animate-spin">
    <div class="relative w-full h-full">
      <div class="absolute top-0 left-0 w-full h-full rounded-full border-3 border-transparent border-t-4 border-t-blue-500 animate-spin"></div>
    </div>
  </div>,
    html: `<div className="circle-loader">
      <div className="loader-inner">
        <div className="circle-primary"></div>
      </div>
    </div>`,
    css: `.circle-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #007bff;
  animation: rotate-circle 1.2s infinite linear;
}

.circle-loader .loader-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.circle-loader .circle-primary {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #007bff;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
  },
];
