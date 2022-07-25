import React from "react";
import BodyHeaderContainer from "../../../../components/Home/body/body-header-container/BodyHeaderContainer";
import BodyOptionsContainer from "../../../../components/Home/body/body-options-container/BodyOptionsContainer";
import BodyTitle from "../../../../components/Home/body/body-title/BodyTitle";
import PageContainer from "../../../../components/Home/body/page-container/PageContainer";

const Colleagues = () => {
  return (
    <PageContainer>
      <BodyHeaderContainer>
        <BodyTitle title={`Check List title`} />
        <BodyOptionsContainer></BodyOptionsContainer>
      </BodyHeaderContainer>
    </PageContainer>
  );
};

export default Colleagues;
