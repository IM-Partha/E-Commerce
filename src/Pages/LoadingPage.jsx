import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const [timeLeft, setTimeLeft] = useState(3); // ⏱️ 3 seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/"); // auto redirect to home
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

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
