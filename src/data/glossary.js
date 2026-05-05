export const GLOSSARY = [
  // Time of Death
  { term: 'Algor Mortis', definition: 'The progressive cooling of the body after death. The body loses heat at approximately 1–1.5°F per hour under average conditions, used to estimate time of death.', topic: 'Time of Death' },
  { term: 'Rigor Mortis', definition: 'The temporary stiffening of muscles after death caused by ATP depletion. Begins 2–6 hours after death, peaks at 12 hours, and dissipates within 24–48 hours.', topic: 'Time of Death' },
  { term: 'Livor Mortis', definition: 'Also known as lividity. The purplish-red discoloration of skin caused by the settling of blood under gravity after death. Becomes fixed after 6–12 hours.', topic: 'Time of Death' },
  { term: 'Postmortem Interval (PMI)', definition: 'The estimated time elapsed since death. Calculated using physical, biological, and environmental evidence such as body temperature, insect activity, and decomposition stage.', topic: 'Time of Death' },
  { term: 'Pallor Mortis', definition: 'The paleness of skin that occurs within 15–25 minutes after death due to capillary blood drainage.', topic: 'Time of Death' },

  // Decomposition
  { term: 'Putrefaction', definition: 'The breakdown of soft tissue by bacteria, typically beginning within 24–72 hours. Evidenced by bloating, discoloration, and odor production.', topic: 'Decomposition' },
  { term: 'Adipocere', definition: 'A waxy, soap-like substance formed from body fats through saponification in moist, anaerobic environments. Can preserve remains for years.', topic: 'Decomposition' },
  { term: 'Mummification', definition: 'Dehydration of soft tissue leading to a dry, preserved state. Occurs in hot, dry, or well-ventilated environments. Can prevent normal decomposition.', topic: 'Decomposition' },
  { term: 'Skeletonization', definition: 'The final stage of decomposition in which all soft tissue is removed, leaving only skeletal remains. Timing varies greatly based on environment.', topic: 'Decomposition' },
  { term: 'Taphonomy', definition: 'The study of how organisms decay and become fossilized after death. In forensic contexts, used to understand postmortem changes and estimate PMI.', topic: 'Decomposition' },

  // Cause & Manner of Death
  { term: 'Cause of Death', definition: 'The disease, injury, or condition directly responsible for the death (e.g., gunshot wound to the chest).', topic: 'Cause & Manner of Death' },
  { term: 'Manner of Death', definition: 'The classification of how death occurred: Natural, Accident, Homicide, Suicide, or Undetermined (NAHSU).', topic: 'Cause & Manner of Death' },
  { term: 'Mechanism of Death', definition: 'The physiological derangement that results in death (e.g., hemorrhagic shock, cardiac arrest). Distinct from cause of death.', topic: 'Cause & Manner of Death' },
  { term: 'Proximate Cause', definition: 'The immediate, direct cause of death — the final injury or disease that actually caused death.', topic: 'Cause & Manner of Death' },
  { term: 'Underlying Cause', definition: 'The root cause or condition that initiated the chain of events leading to death. Recorded on the death certificate.', topic: 'Cause & Manner of Death' },
  { term: 'Contributory Cause', definition: 'A condition that did not directly cause death but contributed to it (e.g., diabetes in a trauma victim).', topic: 'Cause & Manner of Death' },

  // Forensic Pathology
  { term: 'Autopsy', definition: 'A postmortem medical examination to determine cause and manner of death. May be forensic (medicolegal) or clinical. Includes external and internal examination.', topic: 'Forensic Pathology' },
  { term: 'Forensic Pathologist', definition: 'A physician (MD) who specializes in determining cause and manner of death through postmortem examination and interpretation of medical findings.', topic: 'Forensic Pathology' },
  { term: 'Blunt Force Trauma', definition: 'Injury caused by impact with a blunt object. Produces lacerations, contusions, and fractures. Pattern may help identify the weapon.', topic: 'Forensic Pathology' },
  { term: 'Sharp Force Trauma', definition: 'Injury caused by sharp-edged objects (knife, glass). Produces incised wounds, stab wounds, and chop wounds with distinct characteristics.', topic: 'Forensic Pathology' },
  { term: 'Stippling', definition: 'Also called tattooing. Gunpowder particles embedded in the skin from an intermediate-range gunshot wound. Cannot be wiped away.', topic: 'Forensic Pathology' },
  { term: 'Fouling (Soot)', definition: 'Black carbon deposits on skin from a close-range or contact gunshot wound. Can be wiped away, unlike stippling.', topic: 'Forensic Pathology' },
  { term: 'Contact Wound', definition: 'A gunshot wound where the barrel was pressed against the skin at time of firing. Produces characteristic stellate laceration and soot within the wound track.', topic: 'Forensic Pathology' },
  { term: 'Exit Wound', definition: 'The wound produced where a projectile exits the body. Typically larger and more irregular than the entrance wound.', topic: 'Forensic Pathology' },

  // Identification
  { term: 'CODIS', definition: 'Combined DNA Index System. The FBI\'s national DNA database used to match DNA profiles from crime scenes and missing persons investigations.', topic: 'Identification' },
  { term: 'Forensic Odontology', definition: 'The application of dental science to legal investigations. Used to identify remains by comparing dental records, or to analyze bite mark evidence.', topic: 'Identification' },
  { term: 'Fingerprint (Latent)', definition: 'An invisible fingerprint impression left on a surface. Requires development techniques (powder, chemical) to visualize. Used for identification.', topic: 'Identification' },
  { term: 'Anthropometry', definition: 'The scientific study of body measurements. Historically used for identification; now primarily used in forensic anthropology for biological profiling.', topic: 'Identification' },
  { term: 'Antemortem', definition: 'Before death. Antemortem records (dental X-rays, medical imaging) are compared with postmortem findings for identification.', topic: 'Identification' },
  { term: 'Postmortem', definition: 'After death. Postmortem examination findings are compared with antemortem records during the identification process.', topic: 'Identification' },

  // Legal & Administrative
  { term: 'Chain of Custody', definition: 'The documented, unbroken record of who possessed, handled, or transferred evidence from collection to court. Essential for evidence admissibility.', topic: 'Legal & Administrative' },
  { term: 'Medical Examiner', definition: 'An appointed physician (typically board-certified in forensic pathology) who investigates and certifies deaths within a jurisdiction.', topic: 'Legal & Administrative' },
  { term: 'Coroner', definition: 'An elected or appointed official who investigates deaths. May or may not be a physician depending on jurisdiction. Has legal authority to order autopsies.', topic: 'Legal & Administrative' },
  { term: 'Death Certificate', definition: 'A legal document certifying the fact, cause, and manner of death. Required for burial, estate, and insurance purposes.', topic: 'Legal & Administrative' },
  { term: 'Jurisdiction', definition: 'The geographic area and legal authority within which a medical examiner or coroner has responsibility to investigate deaths.', topic: 'Legal & Administrative' },
  { term: 'Next of Kin (NOK)', definition: 'The closest surviving relative(s) of the deceased. Legally important for identification authorization, notification, and release of remains.', topic: 'Legal & Administrative' },
  { term: 'HIPAA', definition: 'Health Insurance Portability and Accountability Act. Governs the privacy of health information. Special provisions apply to deceased individuals and law enforcement.', topic: 'Legal & Administrative' },

  // Mass Fatality
  { term: 'DMORT', definition: 'Disaster Mortuary Operational Response Team. A federal team of forensic professionals deployed to assist with victim identification in mass fatality incidents.', topic: 'Mass Fatality' },
  { term: 'Mass Fatality Incident (MFI)', definition: 'An event resulting in more deaths than can be managed by local resources. Requires specialized planning, mutual aid, and often federal support.', topic: 'Mass Fatality' },
  { term: 'DVI (Disaster Victim Identification)', definition: 'The systematic process of identifying victims in mass casualty events using ante- and postmortem data. Interpol publishes international DVI guidelines.', topic: 'Mass Fatality' },
  { term: 'Family Assistance Center (FAC)', definition: 'A centralized location established to support families of victims during mass casualty events. Provides information, services, and coordination.', topic: 'Mass Fatality' },

  // Toxicology
  { term: 'Toxicology', definition: 'The study of adverse effects of chemicals and poisons on living organisms. Forensic toxicology analyzes biological specimens to detect drugs, alcohol, and poisons.', topic: 'Toxicology' },
  { term: 'Blood Alcohol Concentration (BAC)', definition: 'The percentage of alcohol in the bloodstream. Legal driving limit is typically 0.08% in the US. Postmortem redistribution can complicate interpretation.', topic: 'Toxicology' },
  { term: 'Postmortem Redistribution', definition: 'The movement of drugs and chemicals in the body after death, which can alter measured concentrations. Significant when interpreting toxicology results.', topic: 'Toxicology' },
  { term: 'Vitreous Humor', definition: 'The clear gel filling the eye. Often collected for toxicology because it is relatively isolated from redistribution effects and resistant to decomposition.', topic: 'Toxicology' },

  // Entomology
  { term: 'Forensic Entomology', definition: 'The use of insect evidence to assist legal investigations. Most commonly used to estimate PMI based on insect succession patterns on remains.', topic: 'Entomology' },
  { term: 'Blow Fly (Calliphoridae)', definition: 'Typically the first insects to colonize remains. Blow fly egg-to-adult development time under known temperatures is used to estimate PMI.', topic: 'Entomology' },
  { term: 'Accumulated Degree Hours/Days (ADH/ADD)', definition: 'A method to account for temperature variation when estimating PMI from insect evidence. Calculated as sum of (temperature – threshold) × time.', topic: 'Entomology' },
];
