import { useEffect, useState } from "react";

export default function LoadingPage() {
  const [timeLeft, setTimeLeft] = useState(3); 


  useEffect(() => {
    if (timeLeft <= 0) {
      window.location.href = "/";
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Processing Checkout...</h1>
      <p className="text-xl">
        Redirecting in{" "}
        <span className="font-bold">
          {timeLeft}s
        </span>
      </p>
    </div>
  );
}
