import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader";
import loadersEnum from "./enums/loaders.enum";
import LoadProgressHelper from "./helpers/loadProgress.helper";
import audioLoader from "./loaders/audio.loader";
import imageLoader from "./loaders/image.loader";
import BasePages from "./pages/BasePages";
import { setInitiated } from "./redux/global.slice";
import Style from "./style/Style";
import { loadAllScripts } from "./utils/Utils";

function App() {
  const [loadProgress, setLoadProgress] = useState(0);
  const locale = useSelector((state: any) => state.global.locale);

  const dispatch = useDispatch();

  function loadAssets() {
    const loaders = [
      imageLoader.loadImages.bind(imageLoader),
      audioLoader.loadAudios.bind(audioLoader),
    ];
    const loadProgressHelper = new LoadProgressHelper(loaders.length * 50);
    //@ts-ignore
    loaders.forEach((loadFunc) => loadFunc.call());
    //@ts-ignore
    audioLoader.emitter.on(loadersEnum.AUDIO_LOAD_PROGRESS, (data) => {
      setLoadProgress(loadProgressHelper.calculateProgress(data.progress, 0));
    });
    //@ts-ignore
    imageLoader.emitter.on(loadersEnum.IMAGE_LOAD_PROGRESS, (data) => {
      setLoadProgress(loadProgressHelper.calculateProgress(data.progress, 2));
    });
  }

  useEffect(() => {
    loadAssets();
  }, []);

  useEffect(() => {
    if (loadProgress === 100) {
      console.log("Loading end ...");
      loadAllScripts();
    }
  }, [loadProgress, dispatch]);
  dispatch(setInitiated(true));
  let content = <Loader />;
  if (loadProgress === 100) {
    if (loadProgress >= 100) {
      content = <Style children={<BasePages />} />;
    }
  }

  return (
    <IntlProvider
      locale={locale}
      messages={require(`./localization/${locale}.json`)}
    >
      <BrowserRouter>
        <div className="App">{content}</div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
