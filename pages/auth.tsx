import { GetServerSideProps } from "next";

export default function Auth() {
  return (
    <div>
      <h5>Welcome to Dashboard</h5>
      <p>my name is Fayha</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
