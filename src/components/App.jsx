
import SpinnerLoader from "./Loader/Loader";

export const App = () => {
  return (
    <>
      <SpinnerLoader/>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      </div>
      </>
  );
};
