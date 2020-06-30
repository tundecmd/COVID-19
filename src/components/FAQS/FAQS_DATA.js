const FAQS_DATA = [
    {    
        id: 1,
        question: 'What is COVID-19?',
        answer: 'Coronaviruses are zoonotic, meaning they are normally transmitted between animals and people. The coronavirus disease (COVID-19) is caused by a new strain of coronavirus (SARS-CoV-2) that has not been previously identified in humans. It was first reported to WHO on the 31st of December, 2019 in Wuhan, China.'
    },
    {    
        id: 2,
        question: 'What is the source of COVID-19?',
        answer: 'Scientists and public health officials are working hard to identify the source of the SARS-CoV-2 which is the virus that causes COVID-19. The initial transmission appeared to be from an animal source, but there has been person-to-person transmission in countries.'
    },
    {    
        id: 3,
        question: 'Is COVID-19 airborne?',
        answer: 'When a person with coronavirus coughs or exhales, droplets land on objects and surfaces around the person. Other people then catch the virus by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch coronavirus if they breathe in these droplets. This is why it is important to stay at least 2 metres away from a person who is coughing or sneezing.'
    },
    {    
        id: 4,
        question: 'What are the symptoms of COVID-19?',
        answer: `
        •  Cough
        •  Fever
        •  Breathing difficulties
                People who have recently travelled outside Nigeria or have been in contact with a confirmed case of COVID-19 should immediately contact NCDC on 07032864444 or 080097000010 (toll-free) if they feel unwell.`,
    },
    {    
        id: 5,
        question: 'Are countries with hot weather immune to COVID-19?',
        answer: 'From the evidence so far, the virus causing COVID-19 can be transmitted in ALL AREAS, including areas with hot and humid weather.',
    },
    {    
        id: 6,
        question: 'Are there any cases in Nigeria?',
        answer: 'Yes. Nigeria has recorded confirmed cases of COVID-19. Most of the cases were imported from high risk countries with community transmission of COVID-19 while some are contacts of confirmed cases. Measures have been put in place to ensure all confirmed cases are isolated and receive treatment, while intense contact tracing is conducted.',
    },
    {    
        id: 7,
        question: 'Has anyone died from the disease in Nigeria?',
        answer: 'Yes. several deaths have been recorded from COVID-19 in Nigeria.',
    },
    {    
        id: 8,
        question: 'What is Nigeria doing to control the spread of the disease in the country?',
        answer: `The Government of Nigeria, through the Federal Ministry of Health has activated an NCDC-led national COVID-19 Emergency Operations Centre to coordinate response activities and has initiated a Presidential Task Force on COVID-19 to provide high-level strategic national response to the disease in Nigeria. 

        The Federal Ministry of Health is working closely with states and the Presidential Task Force on COVID-19, to review response activities and to institute measures to protect the health of Nigerians. Recently, the Federal Government imposed a lockdown on the FCT, Lagos and Ogun States for an initial period of 14 days effective from the 30th  of March to slow down the spread of the disease in Nigeria.
        
        The NCDC has also launched a communication campaign themed #TakeResponsibility. This is a call to all Nigerians and residents in the country to join forces and to be proactive in taking greater individual and collective responsibility in preventing and controlling the spread of COVID-19 in Nigeria.
        
        All updates and resources on the disease can be found on www.covid19.ncdc.gov.ng.`,
    },
    {    
        id: 9,
        question: 'What does self-isolation mean?',
        answer: 'Self-isolation is an important way of controlling the spread of COVID-19. It means that anyone who is returning to Nigeria must stay at home and in strict isolation from their families for 14 days. This is to limit contact with people, protect yourself and loved ones. The NCDC guidelines on this can be found HERE',
    },
    {    
        id: 10,
        question: 'What does social distancing mean?',
        answer: `This is an effective strategy to reduce physical interaction between people towards delaying and reducing the wide spread of COVID-19 in a community.

        This measure involves strict adherence to;
        
        •  Non-contact greetings (avoiding shaking of hands and hugs)
        •  Maintaining at least 2 metres (5 feet) physical distance between yourself and individuals and;
        •  Closure of activities that will cause any form of gathering including schools, houses of worship, and social events.`,
    },
    {    
        id: 11,
        question: 'How are social distancing and self-isolation measures being implemented and monitored?',
        answer: 'States Governments, at all levels, are deploying various strategies to ensure compliance with these directives.',
    },
    {    
        id: 12,
        question: 'How do I report a person who has refused to self-isolate?',
        answer: 'It is expected that every Nigerian resident takes responsibility for controlling the spread of COVID-19. State Governments are also adopting various mechanisms to ensure compliance with instituted measures by the Federal Government including self-isolation. If you know anyone who is not complying with these measures, call your state hotline to enable further investigation.',
    },
    {    
        id: 13,
        question: 'Is there a restriction of flights coming from affected countries?',
        answer: 'Yes. The Federal Government of Nigeria has issued a ban on all international flights effective from the 23rd of March 2020 with the exception of emergency and essential flights for an initial period of time.',
    },
    {    
        id: 14,
        question: 'Does Nigeria have the capacity to diagnose COVID-19?',
        answer: `Yes. Currently, there are nine laboratories in Nigeria can diagnose COVID-19. These are the NCDC National Reference Laboratory, FCT; Defence Reference Laboratory, FCT; Virology Laboratory of Lagos University Teaching Hospital, Lagos State; Biosafety Level-3 Laboratory, Lagos State; Irrua Specialist Teaching Hospital, Edo state; Nigerian Institute of Medical Research, Lagos State; Virology Laboratory of University College Hospital, Oyo State; Federal Teaching Hospital Abakaliki (FETHA), Ebonyi State; and African Centre of Excellence for Genomics of Infectious Diseases, Osun State. They are all in the NCDC molecular laboratory network.
        
        
        Health officials are advised to call 07032864444 for sample transportation and related advice if they have a case that fits the national case definition.`,
    },
    {    
        id: 15,
        question: 'How do I get tested for COVID-19?',
        answer: `In line with the new case definition the following people can be tested for COVID-19 in Nigeria;

        •  Anyone with travel history outside Nigeria, who presents with fever, cough or breathing difficulties within 14 days of arrival; OR
        •  Anyone who has symptoms and is a contact of a confirmed or probable case; OR
        •  Anyone with either cough, difficulty breathing or shortness of breath in an area of moderate or high COVID-19 prevalence with no other explanation for the symptoms
        For people in either of these categories, you must self-isolate and call your state hotline or the NCDC toll-free line immediately on 080097000010. The State Ministry of Health supported by NCDC will arrange for sample collection and transportation to the laboratory.
        
        `,
    },
    {    
        id: 16,
        question: 'Is there a cure for COVID-19?',
        answer: 'There is no specific cure yet for COVID-19. However, many of the symptoms can be treated. Treatment is based on the patient’s clinical condition but supportive care for infected persons can be highly effective.',
    },
    {    
        id: 17,
        question: 'Where are the treatment centres in Nigeria?',
        answer: `NCDC has conducted rapid assessments of treatment centres. This assessment focused on identifying gaps and developing plans to rapidly ensure that we are prepared to manage cases of COVID-19. Every state in Nigeria has identified a treatment centre with minimum capacity needed to manage a case. This capacity is being scaled up rapidly.
        Healthcare workers from identified treatment centres are being trained on how to manage COVID-19 cases using approved guidelines.`,
    },
    {    
        id: 18,
        question: 'Can I visit a nearby health facility if I develop symptoms?',
        answer: `No. It is important you stay indoors and avoid contact with everyone to limit the spread of the disease. The State Ministry of Health supported by NCDC will arrange for sample collection and transportation to the laboratory.

        If you are showing symptoms of COVID-19, immediately contact your state hotline or NCDC on 07032864444 or 080097000010 (toll-free) for further guidance.`,
    },
    {    
        id: 19,
        question: 'Should I travel to another state where there is no case of COVID-19 to stay safe?',
        answer: 'No. There is a higher risk of spreading COVID-19 through movement and inter-state travel. We advise that you stay at home and avoid all non-essential movement and travel.',
    },
    {    
        id: 20,
        question: 'What do I do if I cannot get through to NCDC via their numbers?',
        answer: `We are currently receiving a high volume of calls which unfortunately means that you may not be able to reach us easily through our toll-free number. Alternatively, you may contact us via;

        SMS: 08099555577
        
        WhatsApp: 07087110839
        
        Twitter/Facebook: @NCDCgov
        
        Email: info@ncdc.gov.ng`,
    },
    {    
        id: 21,
        question: 'What should I do when I return to Nigeria from a country with a confirmed case(s) of COVID-19?',
        answer: `All return travellers to Nigeria in the last 14 days must self-isolate by staying indoors and avoiding contact with other people. Please follow this advice even if you do not have symptoms of the virus. If you develop symptoms during this time, immediately contact NCDC on 07032864444 or 080097000010 (toll-free)
        `,
    },
    {    
        id: 22,
        question: 'Am I at risk of catching COVID-19 from a package or products that arrive from countries with a confirmed case(s)?',
        answer: 'Currently there is no evidence to support transmission of COVID-19 associated with imported goods or packages countries with confirmed case(s). Till date, there is no known case of COVID-19 in Nigeria associated with imported goods.',
    },
    {    
        id: 23,
        question: 'What should I do if am pregnant?',
        answer: `Currently, there is no evidence that pregnant women are at higher risk of infection or complications from COVID-19. However, due to changes that may occur during pregnancy, pregnant women are advised to stay at home and adhere strictly to social distancing measures at all times.

        Pregnant women are advised to always practice hand and respiratory hygiene to reduce the risk of getting infected with COVID-19 and are advised to call their health facility for more information regarding ante-natal care provision.`,
    },
    {    
        id: 24,
        question: 'Should I stop my children from going to school?',
        answer: 'Yes. The Federal Government and States Governments, at all levels, are taking proactive measures to shut down schools and large gatherings for an initial period of time. They will be monitoring and enforcing compliance.',
    },
    {    
        id: 25,
        question: 'Is there anything a person can do to avoid becoming infected?',
        answer: `To reduce the risk of infection or spread of COVID-19, members of the public are advised to adhere to the following hand and respiratory hygiene measures:
        •  Wash your hands regularly with soap and water or use an alcohol-based sanitiser if no water and soap is available
        •  Use of no-touch greetings
        •  Maintain at least 2 metres (5 feet) physical distance between yourself and anyone who is coughing or sneezing
        •  Stay home if you feel unwell with symptoms like fever, cough and difficulty in breathing. Immediately call NCDC’s 24/7 toll-free number 0800 970 000 0010. Do not self-medicate
        •  Persons with a persistent cough or sneezing, should also stay at home until they recover
        •  Obey national and state directives requesting the cancellation and avoidance of large gatherings, including places of worship, social and sporting events
        •  Avoid crowded spaces such as open markets, crowded supermarkets and pharmacies
        `,
    },
    {    
        id: 26,
        question: 'What can businesses do to protect their staff?',
        answer: 'Some States have directed the closure of non-essential businesses. For States where this has not been implemented or for essential businesses that will stay open, they have an important role to play in protecting their employees. In line with the directive, employers are advised to circulate NCDC’s public health advisory on COVID-19 to all staff. Encourage sick employees to stay at home if they are unwell. Ensure routine cleaning of high contact areas such as toilets, door handles, telephones. If staff have travelled to any country outside Nigeria in the last 14 days, they must self-isolate for 14 days by staying indoors and avoiding contact with other people.',
    },
]

export default FAQS_DATA;
