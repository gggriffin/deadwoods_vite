import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { MainView } from "./views/MainView/MainView";
import { FoundationView } from "./views/FoundationView/FoundationView";
import { QuestionView } from "./views/QuestionView/QuestionView";
import { VolunteerView } from "./views/VolunteerView/VolunteerView";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="faq/" element={<QuestionView />} />
          <Route path="volunteer/" element={<VolunteerView />} />
          <Route path="foundation/" element={<FoundationView />} />
          <Route path="/" element={<MainView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
};

export default App;
