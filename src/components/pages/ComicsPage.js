import {Helmet} from "react-helmet";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Comics Page</title>
        <meta name="description" content="Description of Comics Page" />
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  )
}

export default ComicsPage;