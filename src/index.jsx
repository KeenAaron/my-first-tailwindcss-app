import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";
import "./css/tailwind.css";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) si estás utilizando TypeScript

root.render(<App />);
