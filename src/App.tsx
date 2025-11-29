import { MerSuiWidget } from "mersui";
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_NAME_PRONUNCIATION,
  AUTHOR_NAME,
  AUTHOR_URL,
  DOCUMENTATION_URL,
  DONATION_AMOUNT,
  DONATION_SUI_ADDRESS,
} from "./constants/app";

function App() {
  return (
    <>
      <div className="text-foreground bg-background flex flex-col justify-between items-center h-screen">
        <main className="flex flex-col justify-center items-center p-6 grow">
          <div className="text-center mt-4">
            <h1 className="text-5xl font-bold">{APP_NAME}</h1>
            <div className="font-light text-center text-sm">
              {APP_NAME_PRONUNCIATION}
            </div>
          </div>

          <h2 className="text-2xl mt-10 text-center font-normal">
            {APP_DESCRIPTION}
          </h2>

          <div className="mt-12 text-center">
            <MerSuiWidget
              recipientAddress={DONATION_SUI_ADDRESS}
              amount={DONATION_AMOUNT}
            />
          </div>

          <div className="mt-12 text-center">
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
        <footer className="flex flex-col justify-center items-center p-6">
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
