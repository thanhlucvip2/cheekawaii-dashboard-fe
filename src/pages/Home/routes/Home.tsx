import { useNotification } from "src/hooks/useNotification";

export const Dashboard = () => {
  const { addNotification } = useNotification();
  return (
    <>
      <button
        onClick={() => {
          addNotification({ message: "dasdas", type: "error" });
        }}
      >
        add
      </button>
    </>
  );
};
