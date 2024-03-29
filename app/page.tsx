import React from "react";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex flex-row space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center md-5">
            <SunIcon className="h-8 w8 " />

            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              Explain something to mne something to mne
            </p>
            <p className="infoText">Explain something to mne</p>
            <p className="infoText">Explain something to mne</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center md-5">
            <BoltIcon className="h-8 w8 " />

            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to mne</p>
            <p className="infoText">Explain something to mne</p>
            <p className="infoText">
              Explain something to mne something to mne
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center md-5">
            <ExclamationTriangleIcon className="h-8 w8 " />

            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain something to mne</p>
            <p className="infoText">Explain something to mne</p>
            <p className="infoText">Explain something to mne</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
