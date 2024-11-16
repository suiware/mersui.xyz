import { MerSuiWidget } from "mersui";
import {
  APP_DESCRIPTION,
  APP_NAME,
  AUTHOR_NAME,
  AUTHOR_URL,
  DOCUMENTATION_URL,
  DONATION_SUI_ADDRESS,
} from "./constants/app";

function App() {
  return (
    <>
      <div className="text-foreground bg-background flex flex-col justify-between items-center h-screen">
        <main className="flex flex-col justify-center items-center p-4 grow">
          <h1 className="text-5xl font-bold">{APP_NAME}</h1>
          <h2 className="text-2xl mt-2 text-center font-light">
            {APP_DESCRIPTION}
          </h2>

          <div className="mt-10 text-center">
            <MerSuiWidget recipientAddress={DONATION_SUI_ADDRESS} />
          </div>

          <div className="mt-8 text-center">
            No intermediaries, you receive donations directly to your Sui
            address.
          </div>

          <div className="mt-5 text-center">
            Want such a button for your React site?{" "}
            <a
              href={DOCUMENTATION_URL}
              target="_blank"
              className="underline block"
            >
              Read the docs
            </a>
          </div>
        </main>
        <footer className="flex flex-col justify-center items-center p-4">
          <div className="mt-5 text-center">
            by{" "}
            <a
              className="font-semibold underline"
              href={AUTHOR_URL}
              target="_blank"
            >
              @{AUTHOR_NAME}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
