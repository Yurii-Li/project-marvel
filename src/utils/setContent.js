import { ErrorMessage, Skeleton, Spinner } from "../components";

const setContent = (process, Component, data) => {
    switch (process) {
        case "waiting":
            return <Skeleton />;
        case "loading":
            return <Spinner />;
        case "error":
            return <ErrorMessage />;
        case "confirmed":
            return <Component data={data} />;
        default:
            throw new Error("Unexpected process state");
    }
};

export { setContent };
