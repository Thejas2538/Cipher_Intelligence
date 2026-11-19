var trainingCases = [
  {
    "id": "ci-001",
    "title": "The Missing Blueprint",
    "level": "Easy",
    "type": "Document theft",
    "summary": "A confidential architectural blueprint disappears from the research office shortly before a client presentation.",
    "story": "At 5:30 PM, the research team discovers that the only signed copy of the North Wing blueprint is missing. The office was not forced open. Three employees had access, and the printer room was busy that afternoon.",
    "people": [
      [
        "Alex Morgan",
        "Designer",
        "Says he left at 5:00 PM."
      ],
      [
        "Mira Shah",
        "Assistant",
        "Says she printed routine reports."
      ],
      [
        "Sam Reed",
        "Security officer",
        "Says he checked the hallway at 5:20 PM."
      ]
    ],
    "clues": [
      [
        "Printer log",
        "A 12-page document was printed from Mira's account at 5:12 PM."
      ],
      [
        "Exit camera",
        "Alex is recorded leaving at 5:02 PM."
      ],
      [
        "Paper tray",
        "A torn corner matching the blueprint's red cover is inside the printer tray."
      ],
      [
        "Access record",
        "Mira's card opened the records room at 5:16 PM."
      ],
      [
        "Witness note",
        "Sam saw Mira carrying a large flat folder at 5:22 PM."
      ]
    ],
    "question": "Who most likely removed the blueprint?",
    "options": [
      "Alex Morgan",
      "Mira Shah",
      "Sam Reed"
    ],
    "answer": 1,
    "hint": "Compare the access time with the printer and hallway evidence.",
    "explanation": "Mira's card opened the records room after Alex had left. The matching cover fragment and Sam's observation support the same timeline.",
    "image": "evidence-01.png",
    "imageAlt": "Illustration of a printed document, access card and red folder"
  },
  {
    "id": "ci-002",
    "title": "The Library Message",
    "level": "Easy",
    "type": "Hidden message",
    "summary": "A coded note is found inside a returned library book, and one borrower knows what it means.",
    "story": "A librarian finds a note tucked into a returned atlas. It reads: 'Read the first letter of each shelf label: Cedar, Ash, Maple, Elm.' Four students had borrowed the atlas that week. Only one had a reason to leave a message for the librarian.",
    "people": [
      [
        "Nina",
        "History student",
        "Returned the atlas on Monday."
      ],
      [
        "Omar",
        "Chess club member",
        "Visited the library on Tuesday."
      ],
      [
        "Leah",
        "Poetry student",
        "Asked about the special collections shelf."
      ],
      [
        "Ravi",
        "Science student",
        "Borrowed a different book."
      ]
    ],
    "clues": [
      [
        "Note",
        "The first letters of Cedar, Ash, Maple, Elm spell C-A-M-E."
      ],
      [
        "Visitor log",
        "Leah asked the librarian where to find the 'came' poetry collection."
      ],
      [
        "Book slip",
        "The atlas was checked out by Leah."
      ],
      [
        "Pencil mark",
        "The note has a small drawing of a bookmark, used by the poetry club."
      ],
      [
        "Schedule",
        "Leah was the only suspect in the library when the book was returned."
      ]
    ],
    "question": "Which student most likely left the note?",
    "options": [
      "Nina",
      "Omar",
      "Leah",
      "Ravi"
    ],
    "answer": 2,
    "hint": "Use the borrower record together with the detail that connects the note to a club.",
    "explanation": "Leah borrowed the atlas, asked about the collection referenced by the note and is linked to the bookmark used by the poetry club.",
    "image": "evidence-02.png",
    "imageAlt": "Illustration of an open book and coded note"
  },
  {
    "id": "ci-003",
    "title": "The Clockroom Mystery",
    "level": "Medium",
    "type": "Timeline puzzle",
    "summary": "A museum clock stops at 8:15, but the room log suggests someone entered later.",
    "story": "A rare pocket watch disappears from a locked display room. The wall clock is stopped at 8:15 PM. Three staff members claim they were nowhere near the room after closing. The building's systems record different times.",
    "people": [
      [
        "Evan",
        "Night guide",
        "Says he locked the gallery at 8:00 PM."
      ],
      [
        "Priya",
        "Curator",
        "Says she left at 8:10 PM."
      ],
      [
        "Noah",
        "Technician",
        "Says he reset the wall clock at 8:30 PM."
      ]
    ],
    "clues": [
      [
        "Clock repair ticket",
        "The wall clock battery was removed at 8:30 PM for repair."
      ],
      [
        "Door sensor",
        "The display-room door opened at 8:22 PM."
      ],
      [
        "Lift log",
        "Priya's staff card used the lift to the gallery at 8:19 PM."
      ],
      [
        "Visitor camera",
        "Evan is visible at the front entrance at 8:18 PM."
      ],
      [
        "Inventory sheet",
        "Priya signed the watch inventory at 8:05 PM."
      ]
    ],
    "question": "Who had the strongest opportunity to take the watch?",
    "options": [
      "Evan",
      "Priya",
      "Noah"
    ],
    "answer": 1,
    "hint": "The stopped wall clock is not reliable. Trust the electronic records.",
    "explanation": "The door opened at 8:22 PM and Priya's card placed her on the gallery floor shortly before that. Noah only handled the clock at 8:30 PM.",
    "image": "evidence-03.png",
    "imageAlt": "Illustration of a stopped clock, door sensor and access log"
  },
  {
    "id": "ci-004",
    "title": "The Gallery Switch",
    "level": "Easy",
    "type": "Object swap",
    "summary": "A painting on loan is replaced by a convincing copy before the gallery opens.",
    "story": "A gallery assistant notices that a landscape painting looks slightly different. The frame is original, but the canvas is a copy. Three staff members handled the display the previous evening.",
    "people": [
      [
        "Tara",
        "Registrar",
        "Prepared the loan paperwork."
      ],
      [
        "Ben",
        "Installer",
        "Moved the frame to the display wall."
      ],
      [
        "Ishaan",
        "Photographer",
        "Took condition photographs."
      ]
    ],
    "clues": [
      [
        "Condition photo",
        "The original painting has a small blue mark near the lower-left corner."
      ],
      [
        "Morning inspection",
        "The displayed canvas has no blue mark."
      ],
      [
        "Tool checkout",
        "Ben returned the frame keys at 6:10 PM."
      ],
      [
        "Photo timestamp",
        "Ishaan's last photo shows the original painting at 6:25 PM."
      ],
      [
        "Loading bay log",
        "Tara left with a flat portfolio at 6:40 PM."
      ]
    ],
    "question": "Who had the best-supported opportunity to swap the canvas?",
    "options": [
      "Tara",
      "Ben",
      "Ishaan"
    ],
    "answer": 0,
    "hint": "The original was still present at 6:25 PM. Look at who left afterward carrying something flat.",
    "explanation": "The photograph confirms the original remained in place at 6:25 PM. Tara left later with a flat portfolio that could hold a canvas; the evidence points to her as the likely person.",
    "image": "evidence-04.png",
    "imageAlt": "Illustration of two paintings and a gallery frame"
  },
  {
    "id": "ci-005",
    "title": "The Lab Sample Mix-Up",
    "level": "Medium",
    "type": "Evidence identification",
    "summary": "A labelled sample is found in the wrong refrigerator tray before a research review.",
    "story": "A university lab's harmless plant-growth samples are mixed up. The label on Tray B says Sample 14, but the growth chart says it should be in Tray A. The team must determine who moved it and why.",
    "people": [
      [
        "Meera",
        "Lab assistant",
        "Recorded the morning samples."
      ],
      [
        "Dev",
        "Research student",
        "Cleaned the refrigerator shelves."
      ],
      [
        "Karan",
        "Supervisor",
        "Approved the tray labels."
      ]
    ],
    "clues": [
      [
        "Temperature log",
        "Tray A was opened at 9:05 AM."
      ],
      [
        "Cleaning checklist",
        "Dev cleaned Tray B at 9:20 AM."
      ],
      [
        "Handwritten note",
        "A note says 'move 14 after review' in Karan's handwriting."
      ],
      [
        "Review schedule",
        "Karan's review ended at 9:45 AM."
      ],
      [
        "Label printer",
        "The replacement label was printed from Karan's workstation at 9:51 AM."
      ]
    ],
    "question": "Who most likely moved and relabelled Sample 14?",
    "options": [
      "Meera",
      "Dev",
      "Karan"
    ],
    "answer": 2,
    "hint": "Match the handwritten note with the workstation that printed the new label.",
    "explanation": "The note and printer record both connect the relabelling to Karan. The cleaning checklist only explains why Dev was near the refrigerator.",
    "image": "evidence-05.png",
    "imageAlt": "Illustration of laboratory sample tubes and tray labels"
  },
  {
    "id": "ci-006",
    "title": "The Concert Light Failure",
    "level": "Medium",
    "type": "Technical deduction",
    "summary": "The stage lights go dark for 90 seconds during a performance, but the backup system was ready.",
    "story": "During a school concert, the main stage lights switch off. The backup generator is healthy, but the lighting console reports a manual override. The event manager wants to know which operator changed the setting.",
    "people": [
      [
        "Jules",
        "Sound operator",
        "Was at the audio desk."
      ],
      [
        "Asha",
        "Lighting operator",
        "Was assigned to the console."
      ],
      [
        "Marco",
        "Stage manager",
        "Was backstage during the outage."
      ]
    ],
    "clues": [
      [
        "Console log",
        "A manual blackout command was entered at 7:42 PM."
      ],
      [
        "Audio desk camera",
        "Jules remained at the audio desk from 7:35 to 7:50 PM."
      ],
      [
        "Backstage pass",
        "Marco's pass opened the rear corridor at 7:40 PM."
      ],
      [
        "Console login",
        "The command was entered under Asha's operator account."
      ],
      [
        "Backup report",
        "The backup generator did not activate because the console was set to manual mode."
      ]
    ],
    "question": "Which operator account issued the blackout command?",
    "options": [
      "Jules",
      "Asha",
      "Marco"
    ],
    "answer": 1,
    "hint": "Separate physical location clues from the system's account record.",
    "explanation": "The console log identifies Asha's account as the source of the manual command. This identifies the account used, not necessarily who physically typed it.",
    "image": "evidence-06.png",
    "imageAlt": "Illustration of a lighting console and stage spotlight"
  },
  {
    "id": "ci-007",
    "title": "The Lighthouse Log",
    "level": "Hard",
    "type": "Schedule logic",
    "summary": "A lighthouse maintenance log contains one impossible entry that reveals a false report.",
    "story": "A lighthouse's supply delivery is marked as received at 6:10 AM, but the supply boat did not arrive until 6:40 AM. The keeper says the log was filled in correctly. Three crew members had access to the logbook.",
    "people": [
      [
        "Milo",
        "Lighthouse keeper",
        "Signed the delivery entry."
      ],
      [
        "Sana",
        "Radio operator",
        "Recorded the boat's arrival time."
      ],
      [
        "Theo",
        "Mechanic",
        "Was repairing the dock gate."
      ]
    ],
    "clues": [
      [
        "Radio transcript",
        "The supply boat reported it was 12 minutes away at 6:28 AM."
      ],
      [
        "Harbour camera",
        "The boat entered the harbour at 6:39 AM."
      ],
      [
        "Logbook",
        "The delivery was signed at 6:10 AM."
      ],
      [
        "Ink check",
        "The 6:10 entry uses the same pen as Milo's 7:00 AM note."
      ],
      [
        "Duty roster",
        "Milo was the only person assigned to sign for deliveries."
      ]
    ],
    "question": "Whose report is contradicted by the evidence?",
    "options": [
      "Milo's delivery entry",
      "Sana's radio record",
      "Theo's repair note"
    ],
    "answer": 0,
    "hint": "An entry cannot confirm receipt before the boat reaches the harbour.",
    "explanation": "The boat was still approaching at 6:28 and entered at 6:39, so a 6:10 receipt is impossible. The entry is signed by Milo and matches his later pen use.",
    "image": "evidence-07.png",
    "imageAlt": "Illustration of a lighthouse logbook and harbour clock"
  },
  {
    "id": "ci-008",
    "title": "The Museum Diamond",
    "level": "Hard",
    "type": "Access and timing",
    "summary": "A replica is found in a display case, and the key register has a missing line.",
    "story": "A museum's display diamond is discovered to be a replica during a routine check. The case was not damaged. A key was borrowed during the afternoon, but the register has a blank line where the return time should be.",
    "people": [
      [
        "Elena",
        "Curator",
        "Had the master key in the morning."
      ],
      [
        "Rafi",
        "Exhibition assistant",
        "Borrowed the display key."
      ],
      [
        "June",
        "Cleaner",
        "Was in the hall after closing."
      ]
    ],
    "clues": [
      [
        "Key register",
        "Rafi borrowed the display key at 3:15 PM."
      ],
      [
        "Case sensor",
        "The case opened at 3:42 PM."
      ],
      [
        "Cleaning camera",
        "June entered the hall at 4:10 PM, after the case was closed."
      ],
      [
        "Condition report",
        "Elena photographed the genuine diamond at 3:00 PM."
      ],
      [
        "Return slot",
        "The key was returned at 4:05 PM, but the register's return field is blank."
      ]
    ],
    "question": "Who had direct access at the time the case was opened?",
    "options": [
      "Elena",
      "Rafi",
      "June"
    ],
    "answer": 1,
    "hint": "Compare the key-borrowing time with the case sensor time.",
    "explanation": "Rafi borrowed the key at 3:15 PM, and the case opened at 3:42 PM. June arrived later, while Elena's photograph confirms the diamond was present at 3:00 PM.",
    "image": "evidence-08.png",
    "imageAlt": "Illustration of a display case, diamond silhouette and key"
  },
  {
    "id": "ci-009",
    "title": "The Campus Exam Leak",
    "level": "Medium",
    "type": "Digital trail",
    "summary": "A draft exam paper appears online before the scheduled release time.",
    "story": "A practice exam paper is uploaded to a student forum before the lecturer releases it. The file was stored on a shared campus computer. Investigators must use the file history and sign-in log to identify the account involved.",
    "people": [
      [
        "Nikhil",
        "Class representative",
        "Used the room at 10:00 AM."
      ],
      [
        "Sara",
        "Lab assistant",
        "Maintained the shared computer."
      ],
      [
        "Arun",
        "Lecturer",
        "Created the exam draft."
      ]
    ],
    "clues": [
      [
        "File history",
        "The PDF was exported at 10:42 AM."
      ],
      [
        "Sign-in record",
        "The computer was logged in as LAB-ASSIST at 10:40 AM."
      ],
      [
        "Lecturer's email",
        "Arun sent the draft to the lab account at 9:55 AM for printing."
      ],
      [
        "Room schedule",
        "Nikhil's class ended at 10:15 AM."
      ],
      [
        "Upload record",
        "The forum upload happened at 10:44 AM from the campus network."
      ]
    ],
    "question": "Which account is directly linked to the export event?",
    "options": [
      "Nikhil's student account",
      "LAB-ASSIST account",
      "Arun's lecturer account"
    ],
    "answer": 1,
    "hint": "The question asks which account the computer recorded, not who may have had a motive.",
    "explanation": "The sign-in record shows LAB-ASSIST was active at 10:40 AM, just before the PDF export at 10:42 AM. That is the account directly linked by the logs.",
    "image": "evidence-09.png",
    "imageAlt": "Illustration of a laptop showing a file activity log"
  },
  {
    "id": "ci-010",
    "title": "The Greenhouse Orchid",
    "level": "Easy",
    "type": "Witness and object clue",
    "summary": "A rare orchid is missing from a greenhouse, and a trail of damp soil leads away from one bench.",
    "story": "A rare orchid is missing from the greenhouse display. The watering system was off, and only three gardeners were scheduled. A small amount of soil is found near the side door.",
    "people": [
      [
        "Pia",
        "Gardener",
        "Watered the north bench."
      ],
      [
        "Luis",
        "Delivery assistant",
        "Moved empty pots."
      ],
      [
        "Nora",
        "Botany student",
        "Photographed the orchid collection."
      ]
    ],
    "clues": [
      [
        "Bench label",
        "The missing orchid was on the north bench."
      ],
      [
        "Soil sample",
        "A fresh trail of north-bench soil and matching cart-wheel marks runs from the bench to the side door."
      ],
      [
        "Photo timestamp",
        "Nora photographed the orchid at 2:10 PM."
      ],
      [
        "Delivery sheet",
        "Luis moved empty pots at 2:30 PM."
      ],
      [
        "Watering chart",
        "Pia watered the north bench at 2:45 PM and signed the sheet."
      ]
    ],
    "question": "Whose activity is most closely linked to the soil trail?",
    "options": [
      "Pia",
      "Luis",
      "Nora"
    ],
    "answer": 0,
    "hint": "The soil came from the north bench. Check who worked at that bench after the photo.",
    "explanation": "Pia worked at the north bench at 2:45 PM, after the 2:10 photograph. The matching soil trail links the movement to that bench, making Pia's activity the strongest lead.",
    "image": "evidence-10.png",
    "imageAlt": "Illustration of a greenhouse orchid pot and soil trail"
  }
];
