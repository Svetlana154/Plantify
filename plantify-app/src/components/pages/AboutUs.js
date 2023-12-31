import GoalBlock from "../GoalBlock";
import ServicesCarousel from "../ServicesCarousel";
import Team from "../Team";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

function AboutUs() {
  const {t} = useTranslation();

  const [aboutUsData, setAboutUsData] = useState({});
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      const data = await fetch(t('AboutUs'));
      const json = await data.json();
      if (isSubscribed) {
        setAboutUsData(json);
      }
    }

    fetchData()
    
    return () => isSubscribed = false;

  }, [t]);

  useEffect(() => {
    let isTeamSubscribed = true;

    const fetchTeamData = async () => {
      const data = await fetch(aboutUsData.TeamData);
      const json = await data.json();
      
      if (isTeamSubscribed) {
        setTeamData(json);
      }
    }

    fetchTeamData()
    return () => isTeamSubscribed = false;

  }, [aboutUsData]);

  
  return (
    <div aria-description='This page provides information about the company. It has 2 main sections: the purpose and meet the team.'>
      <GoalBlock title={aboutUsData.PurposeTitle} description={aboutUsData.PurposeDescription}/>
      <Team title={aboutUsData.TeamTitle} data={teamData}/>
      <ServicesCarousel />
    </div>
  );
}

export default AboutUs;