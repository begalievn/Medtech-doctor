import React from 'react';
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyContentContainer from "../../../../components/Home/body/body-content-container/BodyContentContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";

const Content = () => {
  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Контент в мобильном приложении`} />
      </BodyHeaderContainer>

      <BodyContentContainer>

      </BodyContentContainer>
    </PageContainer>
  );
};

export default Content;