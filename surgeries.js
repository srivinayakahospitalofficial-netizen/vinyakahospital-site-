const commonFaqs = [
  {
    question: "How do I book an appointment with a specialist?",
    answer: "You can book an appointment by calling Sri Vinayaka Hospital directly or by using the Book Consultation button on the website."
  },
  {
    question: "Do I need a referral to consult a specialist doctor?",
    answer: "No referral is usually required. You can directly consult our specialist doctors."
  },
  {
    question: "Are all surgeries done as daycare or will I need to stay overnight?",
    answer: "Some surgeries can be done as daycare procedures, while others may require overnight stay depending on your condition and doctor’s advice."
  },
  {
    question: "Does the hospital accept health insurance or Ayushman Bharat cards?",
    answer: "Insurance support may be available for eligible treatments. Please contact the hospital team to confirm your policy or card eligibility."
  },
  {
    question: "What documents do I need to bring for consultation or surgery?",
    answer: "Please bring previous medical reports, prescriptions, ID proof, insurance documents if applicable, and any diagnostic test results."
  },
  {
    question: "How soon can I get test results after diagnostics?",
    answer: "Most diagnostic results are shared as early as possible. Timing depends on the type of test."
  },
  {
    question: "Are your doctors and surgeons qualified and experienced?",
    answer: "Yes, Sri Vinayaka Hospital has qualified and experienced doctors and surgeons for patient-focused treatment."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, emergency care support is available at Sri Vinayaka Hospital."
  }
];

const surgeryData = {
  proctology: {
    pageTitle: "Proctology Treatment in Bangalore | Sri Vinayaka Hospital",
    heroTag: "Advanced Proctology Care",
    title: "Get Best Proctology Treatment in Bangalore",
    description:
      "Find expert doctors for piles, fistula and fissure treatment at affordable costs with Sri Vinayaka Hospital.",
    image: "assets/procto.png",
    aboutTag: "Proctology Treatment",
    aboutTitle: "Advanced Proctology Care at Sri Vinayaka Hospital",
    about: [
      "Are you struggling with pain, bleeding, swelling or discomfort caused by piles, fistula or fissure? Sri Vinayaka Hospital is here to support you with compassionate care and advanced surgical solutions designed to bring lasting relief.",
      "We provide proctology treatment in Bangalore with experienced doctors, modern facilities and patient-focused care. Our team focuses on accurate diagnosis, safe treatment planning and smooth recovery support.",
      "Using modern surgical methods, our doctors aim to reduce pain, improve healing and help patients return to normal life with confidence. Schedule your consultation today and take the first step toward a healthier, more comfortable life."
    ],
    subHeading: "Proctology Treatments",
    subDescription: "Treatment options available for piles, fistula and fissure.",
    treatments: [
    {
        name: "Piles Treatment",
        title: "What is Piles?",
        image: "assets/pilles.png",
        description: [
        "Piles, also known as hemorrhoids, are swollen blood vessels in the lower rectum or anus.",
        "They can cause pain, itching, bleeding, swelling and discomfort while sitting or during bowel movements.",
        "Sri Vinayaka Hospital provides advanced piles treatment with experienced doctors, modern facilities and patient-focused care."
        ]
    },
    {
        name: "Fistula Treatment",
        title: "What is Fistula?",
        image: "assets/fistula.png",
        description: [
        "An anal fistula is an abnormal tunnel that forms between the anal canal and the skin near the anus.",
        "It may cause pain, swelling, pus discharge, repeated infection and discomfort.",
        "Proper diagnosis and surgical care help treat fistula safely and reduce the risk of recurrence."
        ]
    },
    {
        name: "Fissure Treatment",
        title: "What is Fissure?",
        image: "assets/fissure.png",
        description: [
        "An anal fissure is a small tear in the lining of the anus.",
        "It can cause sharp pain, burning sensation and bleeding during bowel movements.",
        "Early treatment helps reduce pain, heal the tear and improve daily comfort."
        ]
    }
    ],
    faqs: commonFaqs
  },

laparoscopy: {
  pageTitle: "Laparoscopic Surgery in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Minimally Invasive Surgery",
  title: "Advanced Laparoscopic Surgery in Bangalore",
  description:
    "Safe laparoscopic treatment for hernia, appendicitis and gallbladder stones with faster recovery.",
  image: "assets/laparoscopy.png",
  aboutTag: "Laparoscopy Treatment",
  aboutTitle: "Minimally Invasive Surgical Care",
  about: [
    "Sri Vinayaka Hospital provides laparoscopic surgery in Bangalore using minimally invasive techniques that involve smaller cuts, less pain and faster recovery compared to traditional open surgery.",
    "Our experienced surgical team offers careful evaluation, advanced operation theatre support and complete post-surgery guidance for a safe treatment experience.",
    "Laparoscopic procedures are commonly used for hernia, appendix and gallbladder conditions where patients may benefit from shorter hospital stay and quicker return to daily activities."
  ],
  subHeading: "Laparoscopy Treatments",
  subDescription: "Common laparoscopic surgeries available at our hospital.",
  treatments: [
    {
      name: "Hernia Surgery",
      title: "What is Hernia?",
      image: "assets/hernia.png",
      description: [
        "A hernia occurs when an internal organ or tissue pushes through a weak spot in the muscle wall.",
        "It may cause swelling, discomfort or pain, especially while lifting, coughing or standing for long periods.",
        "Sri Vinayaka Hospital provides hernia surgery with experienced doctors, modern facilities and recovery-focused care."
      ]
    },
    {
      name: "Appendicitis Surgery",
      title: "What is Appendicitis?",
      image: "assets/appendicitis.png",
      description: [
        "Appendicitis is inflammation of the appendix and can cause severe abdominal pain.",
        "Common symptoms may include fever, nausea, vomiting and pain that usually starts near the belly button and shifts to the lower right abdomen.",
        "Timely diagnosis and surgical treatment are important to prevent complications."
      ]
    },
    {
      name: "Gallbladder Stone Surgery",
      title: "What are Gallbladder Stones?",
      image: "assets/gallbladder.png",
      description: [
        "Gallbladder stones are hardened deposits that form inside the gallbladder.",
        "They can cause abdominal pain, indigestion, vomiting, bloating and infection in some patients.",
        "Sri Vinayaka Hospital provides surgical care for symptomatic gallbladder stones with safe treatment planning and post-surgery support."
      ]
    }
  ],
  faqs: commonFaqs
},


 urology: {
  pageTitle: "Urology Treatment in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Advanced Urology Care",
  title: "Best Urology Treatment in Bangalore",
  description:
    "Comprehensive urology care for kidney stones, prostate problems, urinary issues and male health concerns.",
  image: "assets/urology.png",
  aboutTag: "Urology Treatment",
  aboutTitle: "Complete Urology Care",
  about: [
    "Sri Vinayaka Hospital offers urology treatment in Bangalore for urinary tract, kidney, bladder, prostate and male health conditions.",
    "Our doctors focus on proper diagnosis, patient comfort and effective treatment planning for both simple and complex urology concerns.",
    "From kidney stones to prostate problems and urinary infections, we provide supportive care with modern diagnostic and surgical facilities."
  ],
  subHeading: "Urology Treatments",
  subDescription: "Urology conditions treated with expert medical support.",
  treatments: [
    {
      name: "Kidney Stone Treatment",
      title: "What is Kidney Stone?",
      image: "assets/kidneystone.png",
      description: [
        "Kidney stones are hard mineral deposits that form inside the kidneys.",
        "They may cause severe back pain, burning urination, blood in urine, nausea and urinary blockage.",
        "Sri Vinayaka Hospital provides advanced kidney stone treatment with modern diagnostic and surgical support."
      ]
    },
    {
      name: "Prostate Care",
      title: "What are Prostate Problems?",
      image: "assets/prostate.png",
      description: [
        "Prostate problems can affect urine flow and bladder function in men.",
        "Symptoms may include frequent urination, weak urine stream, urgency and incomplete bladder emptying.",
        "Proper medical evaluation helps identify the right treatment plan for better urinary health."
      ]
    },
    {
      name: "UTI Treatment",
      title: "What is UTI?",
      image: "assets/uti.png",
      description: [
        "A urinary tract infection can affect the bladder, urethra or kidneys.",
        "Common symptoms include burning urination, fever, lower abdominal pain and frequent urination.",
        "Early treatment helps prevent infection spread and improves patient comfort."
      ]
    },
    {
      name: "Bladder Problem Treatment",
      title: "What are Bladder Problems?",
      image: "assets/bladder.png",
      description: [
        "Bladder problems may include urine leakage, pain, urgency or difficulty controlling urination.",
        "These conditions can affect daily comfort and quality of life.",
        "Sri Vinayaka Hospital provides evaluation and treatment support for bladder-related concerns."
      ]
    },
    {
      name: "Urinary Issues Treatment",
      title: "What are Urinary Issues?",
      image: "assets/urinary.png",
      description: [
        "Urinary issues may include painful urination, urine retention or difficulty passing urine.",
        "These symptoms can occur due to infection, blockage or other medical conditions.",
        "Accurate diagnosis helps doctors plan effective treatment and improve urinary function."
      ]
    },
    {
      name: "Male Infertility Care",
      title: "What is Male Infertility?",
      image: "assets/maleinfertility.png",
      description: [
        "Male infertility may occur due to low sperm count, poor sperm quality or hormonal imbalance.",
        "Lifestyle factors, infections and medical conditions can also affect fertility.",
        "Proper evaluation helps identify causes and available treatment options."
      ]
    },
    {
      name: "Hydrocele Treatment",
      title: "What is Hydrocele?",
      image: "assets/hydrocele.png",
      description: [
        "Hydrocele is swelling in the scrotum caused by fluid collection around the testicle.",
        "It may increase in size and cause discomfort or heaviness in some patients.",
        "Medical evaluation helps determine whether observation or treatment is required."
      ]
    },
    {
      name: "Circumcision Surgery",
      title: "What is Circumcision?",
      image: "assets/circumcision.png",
      description: [
        "Circumcision is a minor surgical procedure performed to remove the foreskin.",
        "It may be advised for tight foreskin, repeated infections or hygiene-related concerns.",
        "Sri Vinayaka Hospital provides safe circumcision procedures with proper recovery guidance."
      ]
    }
  ],
  faqs: commonFaqs
},

cosmetic: {
  pageTitle: "Cosmetic Surgery in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Cosmetic Surgical Care",
  title: "Cosmetic Surgery in Bangalore",
  description:
    "Safe and personalized cosmetic surgery care with experienced doctors.",
  image: "assets/cosmetic.png",
  aboutTag: "Cosmetic Treatment",
  aboutTitle: "Personalized Cosmetic Care",
  about: [
    "Sri Vinayaka Hospital provides cosmetic surgery support with a focus on safety, comfort and natural-looking results.",
    "Our doctors guide patients with proper consultation, realistic expectations and suitable treatment planning.",
    "Cosmetic procedures are planned carefully based on each patient’s needs, health condition and desired outcome."
  ],
  subHeading: "Cosmetic Treatments",
  subDescription: "Cosmetic procedures available with medical guidance.",
  treatments: [
    {
      name: "Scar Removal Treatment",
      title: "What is Scar Removal?",
      image: "assets/scarremoval.png",
      description: [
        "Scar removal treatment helps reduce the appearance of scars caused by injury, burns, surgery or acne.",
        "Different treatment methods may be used depending on the scar type, skin condition and severity.",
        "Sri Vinayaka Hospital provides cosmetic scar treatment with patient-focused care and proper guidance."
      ]
    },
    {
      name: "Skin Procedures",
      title: "What are Skin Procedures?",
      image: "assets/cosmetic.png",
      description: [
        "Skin procedures are cosmetic treatments designed to improve skin texture, appearance and overall skin health.",
        "Patients may seek treatment for pigmentation, uneven skin tone, acne marks or minor cosmetic concerns.",
        "Our doctors guide patients with suitable cosmetic treatment options based on individual skin needs."
      ]
    },
    {
      name: "Cosmetic Corrections",
      title: "What are Cosmetic Corrections?",
      image: "assets/cusmetric.png",
      description: [
        "Cosmetic corrections are procedures performed to improve physical appearance or correct visible cosmetic concerns.",
        "Treatment planning is personalized based on the patient’s goals, medical condition and expected outcome.",
        "Sri Vinayaka Hospital focuses on safe cosmetic care with proper consultation and recovery support."
      ]
    }
  ],
  faqs: commonFaqs
},

orthopedics: {
  pageTitle: "Orthopedic Treatment in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Bone & Joint Care",
  title: "Orthopedic Treatment in Bangalore",
  description:
    "Advanced orthopedic care for fractures, joint pain, spine problems and sports injuries.",
  image: "assets/ortho.png",
  aboutTag: "Orthopedic Treatment",
  aboutTitle: "Bone, Joint and Trauma Care",
  about: [
    "Sri Vinayaka Hospital provides orthopedic treatment in Bangalore for bone, joint, muscle and spine-related problems.",
    "Our orthopedic care focuses on pain relief, mobility improvement, fracture management and recovery support.",
    "From injury care to long-term joint problems, we provide patient-focused treatment with experienced doctors and rehabilitation support."
  ],
  subHeading: "Orthopedic Treatments",
  subDescription: "Orthopedic conditions managed with expert care.",
  treatments: [
    {
      name: "Fracture Care",
      title: "What is Fracture Care?",
      image: "assets/fracture.png",
      description: [
        "Fracture care includes diagnosis and treatment of broken or cracked bones caused by accidents, falls or injuries.",
        "Treatment may involve splints, casts, surgery or rehabilitation depending on the severity of the fracture.",
        "Sri Vinayaka Hospital provides orthopedic fracture care with proper recovery support and patient-focused treatment."
      ]
    },
    {
      name: "Joint Pain Treatment",
      title: "What is Joint Pain?",
      image: "assets/jointpain.png",
      description: [
        "Joint pain can affect knees, shoulders, hips or other joints and may occur due to arthritis, injury or inflammation.",
        "Patients may experience stiffness, swelling, discomfort or reduced movement.",
        "Early treatment helps reduce pain and improve mobility and daily comfort."
      ]
    },
    {
      name: "Knee Problem Treatment",
      title: "What are Knee Problems?",
      image: "assets/knee.png",
      description: [
        "Knee problems may include ligament injuries, arthritis, swelling, stiffness or difficulty walking.",
        "Pain may increase during climbing stairs, standing or physical activity.",
        "Proper orthopedic evaluation helps identify the condition and plan suitable treatment."
      ]
    },
    {
      name: "Back Pain Treatment",
      title: "What is Back Pain?",
      image: "assets/backpain.png",
      description: [
        "Back pain can occur due to muscle strain, posture problems, disc issues or spinal conditions.",
        "Symptoms may include stiffness, pain while bending or difficulty standing for long periods.",
        "Sri Vinayaka Hospital provides evaluation and treatment support for acute and chronic back pain."
      ]
    },
    {
      name: "Spine Care",
      title: "What is Spine Care?",
      image: "assets/spine.png",
      description: [
        "Spine care focuses on conditions affecting the neck, back and spinal column.",
        "Patients may experience nerve pain, disc problems, posture-related issues or movement difficulty.",
        "Early diagnosis and proper orthopedic care help improve spine health and mobility."
      ]
    },
    {
      name: "Sports Injury Treatment",
      title: "What are Sports Injuries?",
      image: "assets/fracture.png",
      description: [
        "Sports injuries may include ligament tears, sprains, muscle injuries and joint damage caused during physical activity.",
        "These injuries can affect movement, strength and athletic performance.",
        "Treatment focuses on recovery, rehabilitation and preventing future injury."
      ]
    },
    {
      name: "Arthritis Treatment",
      title: "What is Arthritis?",
      image: "assets/fracture.png",
      description: [
        "Arthritis is inflammation or degeneration of joints that can cause pain, swelling and stiffness.",
        "It commonly affects knees, hips, fingers and other joints, especially with aging.",
        "Proper treatment helps reduce pain, improve movement and maintain joint function."
      ]
    }
  ],
  faqs: commonFaqs
},

 ophthalmology: {
  pageTitle: "Ophthalmology Treatment in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Eye Care Services",
  title: "Ophthalmology Treatment in Bangalore",
  description:
    "Eye care support for cataract and general eye problems with experienced doctors.",
  image: "assets/eye.png",
  aboutTag: "Eye Care",
  aboutTitle: "Complete Eye Care Services",
  about: [
    "Sri Vinayaka Hospital provides ophthalmology care for common eye problems, vision concerns and cataract-related issues.",
    "Our eye care services focus on early diagnosis, proper consultation and suitable treatment planning.",
    "Patients can consult for blurred vision, eye discomfort, cataract symptoms and routine eye checkups."
  ],
  subHeading: "Ophthalmology Treatments",
  subDescription: "Eye care treatments available at our hospital.",
  treatments: [
    {
      name: "Cataract Treatment",
      title: "What is Cataract?",
      image: "assets/cataract.png",
      description: [
        "Cataract is clouding of the natural eye lens, which can cause blurred vision and difficulty seeing clearly.",
        "Patients may experience glare, poor night vision, faded colors or sensitivity to bright light.",
        "Sri Vinayaka Hospital provides cataract evaluation and surgical treatment support with experienced eye care specialists."
      ]
    },
    {
      name: "General Eye Care",
      title: "What is General Eye Care?",
      image: "assets/eye.png",
      description: [
        "General eye care includes consultation for eye pain, redness, watering, infection and routine vision concerns.",
        "Regular eye checkups help detect problems early and support long-term eye health.",
        "Our doctors provide proper evaluation and guidance for common eye conditions and vision-related symptoms."
      ]
    }
  ],
  faqs: commonFaqs
},


 vascular: {
  pageTitle: "Vascular Surgery in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Vascular Care",
  title: "Vascular Surgery in Bangalore",
  description:
    "Treatment support for varicose veins, blood vessel problems and circulation-related conditions.",
  image: "assets/vascular.png",
  aboutTag: "Vascular Treatment",
  aboutTitle: "Advanced Vascular Care",
  about: [
    "Sri Vinayaka Hospital provides vascular care for blood vessel and circulation-related problems.",
    "Our doctors evaluate symptoms such as leg swelling, visible veins, pain while walking or circulation issues and guide patients with suitable care.",
    "Treatment planning focuses on improving circulation, reducing symptoms and preventing complications."
  ],
  subHeading: "Vascular Treatments",
  subDescription: "Vascular conditions treated with expert guidance.",
  treatments: [
    {
      name: "Varicose Veins Treatment",
      title: "What are Varicose Veins?",
      image: "assets/varicose.png",
      description: [
        "Varicose veins are enlarged, twisted veins commonly seen in the legs due to weakened vein valves.",
        "Symptoms may include pain, heaviness, swelling, itching and visible bulging veins.",
        "Sri Vinayaka Hospital provides vascular evaluation and treatment support to improve circulation and reduce discomfort."
      ]
    },
    {
      name: "Vascular Blockage Treatment",
      title: "What are Vascular Blockages?",
      image: "assets/vascularblockage.png",
      description: [
        "Vascular blockages occur when blood flow is reduced due to narrowing or obstruction in blood vessels.",
        "Patients may experience pain while walking, swelling, numbness or poor circulation in affected areas.",
        "Early diagnosis and treatment help improve blood flow and reduce the risk of complications."
      ]
    },
    {
      name: "Circulation Problem Treatment",
      title: "What are Circulation Problems?",
      image: "assets/circulation.png",
      description: [
        "Circulation problems happen when blood flow to certain body parts becomes reduced or restricted.",
        "Symptoms may include cold feet, leg pain, swelling, numbness or delayed wound healing.",
        "Proper vascular care helps identify the cause and supports better blood circulation and overall vascular health."
      ]
    }
  ],
  faqs: commonFaqs
},

mtp: {
  pageTitle: "MTP Care in Bangalore | Sri Vinayaka Hospital",
  heroTag: "Confidential Women Care",
  title: "MTP Care in Bangalore",
  description:
    "Confidential and compassionate consultation for Medical Termination of Pregnancy under medical guidance.",
  image: "assets/mtp.png",
  aboutTag: "Women Healthcare",
  aboutTitle: "Confidential MTP Consultation",
  about: [
    "Sri Vinayaka Hospital provides confidential women’s healthcare consultation for Medical Termination of Pregnancy under appropriate medical guidance.",
    "Our team focuses on privacy, safety, emotional support and proper medical evaluation before any treatment decision.",
    "Patients are guided with consultation, required tests, medical advice and post-procedure care support."
  ],
  subHeading: "MTP Support Services",
  subDescription: "Women’s healthcare support with privacy and compassion.",
  treatments: [
    {
      name: "MTP Consultation",
      title: "What is MTP Consultation?",
      image: "assets/mtpconsultation.png",
      description: [
        "MTP consultation involves medical evaluation, patient counseling and understanding the health condition before treatment planning.",
        "Doctors assess pregnancy duration, medical history and safety requirements during consultation.",
        "Sri Vinayaka Hospital provides confidential consultation with privacy, compassion and patient-focused care."
      ]
    },
    {
      name: "Medical Support",
      title: "What is Medical Support?",
      image: "assets/medicalsupport.png",
      description: [
        "Medical support includes doctor guidance, investigations, treatment planning and continuous patient monitoring.",
        "Patients receive proper medical advice, safety instructions and healthcare assistance throughout the process.",
        "Our team focuses on safe treatment planning with emotional support and patient comfort."
      ]
    },
    {
      name: "Post Procedure Care",
      title: "What is Post Procedure Care?",
      image: "assets/postcare.png",
      description: [
        "Post-procedure care includes follow-up consultation, recovery guidance and monitoring after treatment.",
        "Patients are guided about warning signs, medications, rest and recovery support.",
        "Sri Vinayaka Hospital focuses on patient safety, comfort and emotional well-being during recovery."
      ]
    }
  ],
  faqs: commonFaqs
}
};

const params = new URLSearchParams(window.location.search);
const type = params.get("type") || "proctology";
const current = surgeryData[type] || surgeryData.proctology;

document.getElementById("pageTitle").innerText = current.pageTitle;
document.title = current.pageTitle;

document.getElementById("heroTag").innerText = current.heroTag;
document.getElementById("mainTitle").innerText = current.title;
document.getElementById("mainDescription").innerText = current.description;

document.getElementById("aboutTag").innerText = current.aboutTag;
document.getElementById("aboutTitle").innerText = current.aboutTitle;

const aboutDescription = document.getElementById("aboutDescription");
aboutDescription.innerHTML = "";

current.about.forEach(text => {
  aboutDescription.innerHTML += `<p>${text}</p>`;
});

document.getElementById("mainImage").src = current.image;
document.getElementById("mainImage").alt = current.title;

document.getElementById("subHeading").innerText = current.subHeading;
document.getElementById("subDescription").innerText = current.subDescription;

const grid = document.getElementById("subServicesGrid");
grid.innerHTML = "";

current.treatments.forEach((item, index) => {
  grid.innerHTML += `
    <div class="treatment-detail ${index % 2 !== 0 ? "reverse" : ""}">
      
      <div class="treatment-text">
        <span>${item.name}</span>
        <h3>${item.title}</h3>

        ${item.description.map(text => `<p>${text}</p>`).join("")}

        <a href="tel:+917204099115">Book Consultation</a>
      </div>

      <div class="treatment-image">
        <img src="${item.image}" alt="${item.name}">
      </div>

    </div>
  `;
});

const faqList = document.getElementById("faqList");
faqList.innerHTML = "";

current.faqs.forEach((faq, index) => {
  faqList.innerHTML += `
    <div class="faq-item">
      <button class="faq-question" type="button">
        <span>${faq.question}</span>
        <strong>+</strong>
      </button>

      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `;
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", function () {
    const item = this.parentElement;

    item.classList.toggle("active");

    this.querySelector("strong").innerText =
      item.classList.contains("active") ? "−" : "+";
  });
});