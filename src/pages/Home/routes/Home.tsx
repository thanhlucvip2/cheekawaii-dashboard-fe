import { useNotification } from "src/hooks/useNotification";

export const Home = () => {
  const { addNotification } = useNotification();
  return (
    <>
      <button
        onClick={() => {
          addNotification({ message: "dasdas", type: "error" });
        }}
      >
        ss
      </button>
    </>
  );
};
