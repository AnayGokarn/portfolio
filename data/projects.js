/* =====================================================================
   PROJECTS — the single source of truth for every project on the site.
   ---------------------------------------------------------------------
   • ADD a project:    copy one { ... } block, paste it, give it a new
                       unique `slug`, and fill in the fields.
   • REMOVE a project: delete its { ... } block (or just hide it).
   • EDIT a project:   change any field below.
   • HIDE a project:   set `hidden: true`. It disappears from the home
                       page, the portfolio grid and next/previous links.
                       Preview it at project.html?p=<slug>&preview
   • REORDER:          the order here is the order on the site.
   • FEATURE on home:  set `featured: true` (first 3 featured are shown).

   Case-study `sections` are rendered top to bottom. Available types:
     { type: "text",    heading: "...", body: "..." | ["para", "para"] }
     { type: "image",   src: "...", alt: "...", caption: "...", wide: true }
     { type: "gallery", images: [{ src, alt, caption }, ...] }
     { type: "list",    heading: "...", items: ["...", "..."] }
     { type: "quote",   text: "...", cite: "..." }
     { type: "stats",   items: [{ value: "40%", label: "..." }, ...] }
     { type: "table",   columns: [...], rows: [["Label", ...], ...], highlightColumn: 1 }
   `body` text may include simple HTML such as <strong>, <em>, <a>.
   See README.md for full details.
   ===================================================================== */

window.PROJECTS = [
  {
    slug: "sprout-festival-design",
    title: "Sprout Festival Design",
    summary: "A visual system, wayfinding and mobile app for an organic, local-produce food festival at UW.",
    thumbnail: "assets/projects/sprout-festival-design/cover.jpg",
    cover: "assets/projects/sprout-festival-design/cover.jpg",
    // Case-study page uses Sprout's own style guide (header/footer stay site-wide)
    theme: {
      bg: "#FEDF9E",                 // Savannah
      surface: "#FFFFFF",            // White
      text: "#022401",               // Dark Green — 12.95:1 on Savannah
      muted: "#415328",              // Dark Green 75% — 6.52:1 on Savannah
      line: "rgba(2, 36, 1, 0.22)",
      accent: "#1E750C",             // Spring Green — 4.51:1 on Savannah
      accentInk: "#FFFFFF",
      fontSans: "'Kodchasan', system-ui, sans-serif",
      fontDisplay: "'Bagel Fat One', system-ui, sans-serif",
      googleFonts: ["Bagel Fat One", "Kodchasan:wght@400;500;600;700"]
    },
    hidden: false,
    featured: true,
    year: "2025",
    role: "Visual & UX Designer (HCDE 308)",
    tools: ["Figma"],
    tags: ["Branding", "UX/UI", "Wayfinding"],
    sections: [
      { type: "text", heading: "Overview", body: [
        "This case study covers a 10-week project to create a visual system for a festival on the University of Washington campus. I chose to create an organic food festival focused on local produce called <strong>Sprout</strong>.",
        "The festival gives attendees an educational and immersive look into their local food system and a better understanding of sustainable farming and cooking practices. Unlike other food festivals, Sprout functions not just as a place for food trucks, but also as an educational space."
      ]},
      { type: "stats", items: [
        { value: "10 weeks", label: "Project timeline" },
        { value: "Branding", label: "Wordmark, colour, type, poster & signage" },
        { value: "UX Design", label: "Research, personas, journey & user flows" },
        { value: "App Design", label: "Wireframes, testing & mobile interface" }
      ]},

      { type: "text", heading: "Initial Research", body: [
        "I began with a competitor analysis of three distinct festivals: the <strong>Maine Lobster Festival</strong>, <strong>Bite of Seattle</strong>, and <strong>Oktoberfest</strong>. These were chosen to examine a range of approaches to food and beverage festivals, highlighting differences in their core food focus, target audience, and cultural origins.",
        "All of the festivals had a big focus on community, prioritizing events for groups as opposed to individuals. Each was treated as a celebration of a culture, something I wanted to replicate with a festival that celebrates farming in the Pacific Northwest."
      ]},
      { type: "table", heading: "Competitor Analysis",
        caption: "Competitor analysis across best feature, audience, attendance, pricing and key insight.",
        columns: ["Maine Lobster Festival", "Bite of Seattle", "Oktoberfest", "Sprout"],
        highlightColumn: 4,
        rows: [
          ["Best Feature", "Lobster/seafood focus", "Large number of vendors/cuisines", "Historical significance and beer", "Highlighting local chefs & producers"],
          ["Best For", "Seafood enthusiasts, specifically lobster fans", "People who want to experience Seattle food scene and want musical entertainment", "Beer", "Sustainability & environmentally conscious people"],
          ["Customer", "Locals and tourists in Maine who have an interest in seafood & lobster", "People with interest in Seattle culinary culture", "People interested in Bavarian culture and beer, mostly from local area but lots of tourists", "People interested in local food and produce"],
          ["Attendance", "30,000 people", "400,000–450,000 people", "~7 million people", "30,000 people"],
          ["Pricing", "Free admission", "Free admission", "Free admission", "Free admission + $15 per event"],
          ["Insight", "Limited scope", "Focus on entertainment", "Historical significance", "Focus on sustainability"]
        ]
      },
      { type: "list", heading: "Where Sprout fits", items: [
        "<strong>Best feature:</strong> highlighting local chefs and producers.",
        "<strong>Best for:</strong> sustainability-minded, environmentally conscious people.",
        "<strong>Pricing:</strong> free admission, with a $15 charge per event.",
        "<strong>Insight:</strong> where competitors focus on entertainment or history, Sprout focuses on sustainability."
      ]},

      { type: "text", heading: "Personas", body: "I created three personas representing the audiences most likely to attend a festival about local, sustainable food." },
      { type: "gallery", images: [
        { src: "assets/projects/sprout-festival-design/persona-zane.jpg", alt: "Persona photo for Zane", caption: "Zane, 19 — The Student. A curious Informatics student with an $80 budget who wants to try something new with friends." },
        { src: "assets/projects/sprout-festival-design/persona-sarah.jpg", alt: "Persona photo for Sarah", caption: "Sarah, 32 — The Conscious Consumer. A parent passionate about sustainability who wants a family outing that aligns with her values." },
        { src: "assets/projects/sprout-festival-design/persona-mark.jpg", alt: "Persona photo for Mark", caption: "Mark, 28 — The Regional Foodie. A home cook seeking innovative dishes from local chefs and seasonal ingredients." }
      ]},

      { type: "text", heading: "Customer Journey", body: [
        "I mapped the customer journey for Sarah, since she represents what I believe will be a large share of attendees: people interested in sustainable agriculture.",
        "One insight from this exercise was how useful a fixed pricing option, similar to the $5 food fair, could be. Because attendees pay at each vendor, Sarah was unsure how much she would end up spending. A fixed price at every vendor would help people estimate their spend and keep the festival affordable. The journey also surfaced the need for designated seating areas and for organizing vendors by region or cuisine."
      ]},
      { type: "table",
        caption: "Customer journey map for Sarah, the Conscious Consumer.",
        corner: "Journey stage",
        columns: ["Awareness", "Consideration", "Purchase", "Delivery", "Loyalty"],
        rows: [
          [{ label: "Actions", hint: "What actions is the customer taking?" },
            "Looking through a local food blog", "Looking through festival website", "Buying food at a stall at the festival", "Take food to seating area and eat", "Return to food vendors"],
          [{ label: "Touch Points", hint: "Through what medium is the customer interacting?" },
            "Website / Blog", "Festival website", "Vendor stall", "Seating area", "Vendor stall"],
          [{ label: "Goals", hint: "What is the customer trying to achieve?" },
            "Keep up with their favourite blogger", "Determine if they should attend the festival", "Get food from a vendor", "Eat a meal", "Get more food"],
          [{ label: "Emotions", hint: "How is the customer feeling? What are they thinking?" },
            "Interested in the event", "Hesitation around whether or not they should go", "Excited to try new food", "Happy with food choice", "Satisfied and hungry for more"],
          [{ label: "Pain Points", hint: "What is not working or causing friction?" },
            "Lack of specific information about the event", "Because customers pay at each vendor, unsure of how much money she’ll end up spending", "Pricing for food", "Hard to find seating", "Can’t find specific cuisine"],
          [{ label: "Opportunity", hint: "How might you address the pain point through better design?" },
            "Ensure that advertisement for the event provides enough information for people to want to learn more", "Provide an estimate for pricing or have a fixed price option at each vendor ($5 food fair)", "A fixed pricing option at all vendors could keep the fair affordable", "Create designated seating areas throughout festival for people to sit and eat", "Organize vendors by region/cuisine to make navigation easier"]
        ]
      },

      { type: "text", heading: "Wordmark", body: [
        "I wanted to convey joy, playfulness, and curiosity, the emotions I want attendees to feel while learning about local food and food systems. To accomplish this, I chose <strong>Bagel Fat One</strong>, a sans-serif typeface.",
        "Its flattened, oval-like counters, visible in the O and P, create a sense of organic-ness. That matters because it highlights the nature of food production and reinforces the idea of sustainable local food. Setting the wordmark in title case adds to the playfulness."
      ]},
      { type: "wordmarks",
        background: "#FEDF9E",              // Savannah
        color: "#022401",                   // Dark Green
        labelFont: "'Bagel Fat One', sans-serif",
        googleFonts: ["Bagel Fat One", "Alkalami"],
        groups: [
          { label: "Final Wordmark", lines: [
            { font: "'Bagel Fat One', sans-serif", size: "xl", parts: [{ text: "Sprout", color: "#022401" }] }
          ]},
          { box: "rgba(133, 192, 42, 0.75)", lines: [   // Leaf Green at 75%
            { font: "'Bagel Fat One', sans-serif", size: "lg", parts: [{ text: "Sprout", color: "#000000" }, { text: "Sprout", color: "#FFFFFF" }] },
            { font: "'Bagel Fat One', sans-serif", size: "sm", parts: [{ text: "Sprout", color: "#000000" }, { text: "Sprout", color: "#FFFFFF" }] }
          ]},
          { label: "Iterations", box: "rgba(133, 192, 42, 0.75)", lines: [
            { font: "'Alkalami', Georgia, serif", size: "md", parts: [{ text: "Sprout", color: "#000000" }, { text: "Sprout", color: "#FFFFFF" }] },
            { font: "'Kirome', Georgia, serif", size: "md", parts: [{ text: "Sprout", color: "#000000" }, { text: "Sprout", color: "#FFFFFF" }] }
          ]}
        ]
      },

      { type: "text", heading: "Mood Board", body: "Every image conveys a different aspect of fresh food or farming, a theme kept central throughout the design. The images highlight the colours and feelings carried into the final design: greens and browns mixed with brighter colours like red and purple." },
      { type: "gallery", images: [
        { src: "assets/projects/sprout-festival-design/moodboard-1.jpg", alt: "Farmland at sunset with hay bales" },
        { src: "assets/projects/sprout-festival-design/moodboard-2.jpg", alt: "Illustration of fresh vegetables" },
        { src: "assets/projects/sprout-festival-design/moodboard-3.jpg", alt: "Painted aerial view of farm fields" },
        { src: "assets/projects/sprout-festival-design/moodboard-4.jpg", alt: "Woven baskets on grass" },
        { src: "assets/projects/sprout-festival-design/moodboard-5.jpg", alt: "Vintage Farm and Home Week poster" },
        { src: "assets/projects/sprout-festival-design/moodboard-7.jpg", alt: "Ferry Plaza Farmers Market logo" }
      ]},

      { type: "text", heading: "Colour", body: [
        "I wanted to convey naturalness, freshness, and playfulness, so I chose a complementary palette: Spring Green, Savannah, Dark Green, Leaf Green, Bark, Tan, White, Anemone, and Tulip Pink.",
        "The greens and browns play into the natural, fresh side of the festival, evoking earth and growth. The tertiary white, purple, and pink are playful, providing bright contrast. Key pairings were checked for accessibility, with contrast ratios of 12.95 : 1 and 5.22 : 1."
      ]},
      { type: "palette",
        background: "#FEDF9E",              // Savannah
        color: "#022401",                   // Dark Green
        labelFont: "'Bagel Fat One', sans-serif",
        textFont: "'Kodchasan', sans-serif",
        googleFonts: ["Bagel Fat One", "Kodchasan:wght@500"],
        groups: [
          { label: "Primary", swatches: [
            { name: "Spring Green", hex: "1E750C" }, { name: "Savannah", hex: "FEDF9E" }, { name: "Dark Green", hex: "022401" } ] },
          { label: "Secondary", swatches: [
            { name: "Leaf Green", hex: "85C02A" }, { name: "Bark", hex: "AB5420" }, { name: "Tan", hex: "BC7601" } ] },
          { label: "Tertiary", swatches: [
            { name: "White", hex: "FFFFFF" }, { name: "Anemone", hex: "615299" }, { name: "Tulip Pink", hex: "BC2461" } ] }
        ],
        samples: { label: "Contrast Accessibility", items: [
          { text: "Contrast Ratio 12.95 : 1", bg: "#FEDF9E", fg: "#022401" },
          { text: "Contrast Ratio 5.22 : 1", bg: "#AB5420", fg: "#FFFFFF" }
        ]}
      },

      { type: "text", heading: "Typography", body: [
        "Bagel Fat One is the wordmark font because of the rounded, kinetic shape of each letter, which gives a natural, organic feel while staying playful.",
        "For the pairing I chose <strong>Kodchasan</strong>. Its more oval counters in the lowercase o tie into the counters of Bagel Fat One, and its bowled lowercase a and similar letter shapes echo the wordmark in a simpler, more readable form."
      ]},
      { type: "wordmarks",
        background: "#022401",              // Dark Green
        color: "#FFFFFF",
        googleFonts: ["Bagel Fat One", "Kodchasan:wght@400;500;700"],
        groups: [
          { label: "Wordmark Font: Bagel Fat One", labelFont: "'Bagel Fat One', sans-serif", align: "left", lines: [
            { font: "'Bagel Fat One', sans-serif", size: "type", parts: [{ text: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 !@#$%^&*()_+{}:”<>?" }] }
          ]},
          { label: "Font Pairing: Kodchasan", labelFont: "'Kodchasan', sans-serif", labelWeight: 700, align: "left", lines: [
            { font: "'Kodchasan', sans-serif", weight: 400, size: "type", parts: [{ text: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1 2 3 4 5 6 7 8 9 0 !@#$%^&*()_+{}:”<>?" }] }
          ]}
        ]
      },

      { type: "text", heading: "Festival Poster", body: [
        "I used the wordmark font, Bagel Fat One, for the title, dates, and headline events because it is the most eye-catching and highlights the most important information.",
        "Kodchasan is used for smaller events, daily events, and subheaders. Subheaders tend to be longer, so a more readable font helps. Size and weight emphasise words higher in the hierarchy."
      ]},
      { type: "image", src: "assets/projects/sprout-festival-design/poster.svg", outline: true, alt: "Final Sprout festival poster: the wordmark runs vertically beside leaf-shaped event listings for June 6–8", caption: "Final poster." },
      { type: "gallery", heading: "Poster iterations", columns: 4, images: [
        { src: "assets/projects/sprout-festival-design/poster-iteration-1.svg", outline: true, alt: "Poster iteration with leaf event listings and a dated header" },
        { src: "assets/projects/sprout-festival-design/poster-iteration-2.svg", outline: true, alt: "Poster iteration with a horizontal wordmark and a day-by-day grid on cream" },
        { src: "assets/projects/sprout-festival-design/poster-iteration-3.svg", alt: "Poster iteration with a vertical wordmark on dark green" },
        { src: "assets/projects/sprout-festival-design/poster-iteration-4.svg", alt: "Poster iteration with a horizontal wordmark and a day-by-day grid on dark green" }
      ]},

      { type: "text", heading: "Festival Signage", body: [
        "I designed secondary signage in the form of a plinth. Variations of this sign would mark the different areas of the festival. A free-standing plinth makes sense because there is nowhere along the main paths to hang a sign, and its larger surface leaves room for extra information like a map.",
        "Across iterations I changed the type for the food-truck label to clarify hierarchy, added the headline event happening in each area, moved the area name (“Rainier Vista”) to the top, made the map vertical, and changed the sign to green so it reads like something sprouting out of the ground."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/sprout-festival-design/signage-final-scale.svg", alt: "Final green Rainier Vista plinth sign, 3 ft wide and 7 ft tall, next to an illustrated walking person for scale", caption: "Final plinth sign (3 × 7 ft) with a person for scale." },
        { src: "assets/projects/sprout-festival-design/signage-in-world.jpg", alt: "The final plinth sign placed beside a path on Rainier Vista on the UW campus", caption: "The sign in place on Rainier Vista." }
      ]},
      { type: "gallery", heading: "Signage iterations", layout: "row", images: [
        { src: "assets/projects/sprout-festival-design/signage-iteration-1.svg", grow: 162, alt: "Orange sign iteration with map, Rainier Vista title and Food Trucks label in the wordmark font", caption: "1. Area and label only." },
        { src: "assets/projects/sprout-festival-design/signage-iteration-2.svg", grow: 162, alt: "Orange sign iteration with the Food Trucks label in Kodchasan", caption: "2. Clearer label hierarchy." },
        { src: "assets/projects/sprout-festival-design/signage-iteration-3.svg", grow: 162, alt: "Orange sign iteration adding the Jay Blackinton headline event", caption: "3. Headline event added." },
        { src: "assets/projects/sprout-festival-design/signage-iteration-4.svg", grow: 189, alt: "Orange sign iteration with Rainier Vista title moved to the top and a larger map, 3.5 ft by 7 ft", caption: "4. Title on top, larger map (3.5 × 7 ft)." },
        { src: "assets/projects/sprout-festival-design/signage-iteration-5.png", grow: 162, alt: "Green square-topped sign iteration with a vertical map", caption: "5. Green, vertical map." }
      ]},

      { type: "text", heading: "Festival Map", body: [
        "The map became more zoomed in over time, and some building names were removed to simplify it. The location system moved from arrows and lines to a key, and the wordmark and a north arrow were added.",
        "These changes made the map more readable: locations are easier to find and the map itself is larger."
      ]},
      { type: "image", src: "assets/projects/sprout-festival-design/map-final.png", outline: true, alt: "Final vertical Sprout festival map of Rainier Vista with the wordmark, a lettered location key and a north arrow", caption: "Final map." },
      { type: "gallery", heading: "Map iterations", columns: 2, images: [
        { src: "assets/projects/sprout-festival-design/map-variation-1.png", outline: true, alt: "Earlier horizontal map iteration with labelled lines pointing to locations", caption: "Variation 1." },
        { src: "assets/projects/sprout-festival-design/map-variation-2.png", outline: true, alt: "Earlier horizontal map iteration with fewer building names", caption: "Variation 2." }
      ]},

      { type: "text", heading: "User Flow", body: [
        "For the app I mapped the task of browsing and buying festival merch, using Sarah as the persona. She represents the attendee most likely to buy merchandise, whereas the student and the foodie would likely spend on food or ingredients instead.",
        "Walking through the flow surfaced features I hadn’t first considered, like saving items to come back to later. It also showed how many small decisions users make in any process, and how each choice needs to lead clearly to a next step."
      ]},
      { type: "image", src: "assets/projects/sprout-festival-design/user-flow.svg", alt: "User flow for browsing and buying merch, from the home screen through merch browsing, saving, basket, checkout and order confirmation", caption: "User flow: browsing, saving and buying merch.", wide: true,
        legendBackground: "#022401", legendColor: "#FFFFFF",
        legend: [
          { label: "Start / end", color: "#0D4405", shape: "circle" },
          { label: "Screen / page", color: "#DF6A98", shape: "rect" },
          { label: "Decision", color: "#615299", shape: "diamond" },
          { label: "Interaction", color: "#D7AB56", shape: "pill" },
          { label: "Yes", color: "#85C02A", shape: "dot" },
          { label: "No", color: "#AB5420", shape: "dot" }
        ]
      },

      { type: "text", heading: "Wireframes & User Testing", body: [
        "The app was initially designed with a traditional bottom navigation bar, but I found it could be more engaging with a central home screen instead. Leaves appear across multiple UI elements to keep the organic theme throughout the interface.",
        "User testing revealed there was no way to navigate back after opening an item’s details, so I added back navigation. A system for saving items was also added."
      ]},
      { type: "gallery", images: [
        { src: "assets/projects/sprout-festival-design/wireframe-6.jpg", alt: "Wireframe: leaf-based home screen" },
        { src: "assets/projects/sprout-festival-design/wireframe-3.jpg", alt: "Wireframe: merch grid" },
        { src: "assets/projects/sprout-festival-design/wireframe-4.jpg", alt: "Wireframe: merch item detail" },
        { src: "assets/projects/sprout-festival-design/wireframe-2.jpg", alt: "Wireframe: basket" },
        { src: "assets/projects/sprout-festival-design/wireframe-1.jpg", alt: "Wireframe: checkout form" },
        { src: "assets/projects/sprout-festival-design/wireframe-5.jpg", alt: "Wireframe: order confirmed" }
      ]},

      { type: "text", heading: "UI Style Tile", body: "I designed five icons: home, tickets, map, food truck, and save. To relate them to the logomark, I used a line weight and shape similar to it, and integrated the logo into icons where relevant. The tile also defines primary and secondary button states and input states." },
      { type: "uiDemo",
        intro: "Try the components: hover over a button (hold for a second to see its focused state), click it, or tab to it, then type in the field. Leave it empty or add numbers to see the error state.",
        background: "#022401",              // Dark Green
        panel: "#29530D",                   // Leaf Green at 30% over Dark Green, as in the style tile
        color: "#FFFFFF",
        font: "'Bagel Fat One', sans-serif",
        googleFonts: ["Bagel Fat One"],
        buttons: [
          { label: "Primary Button", bg: "#022401", fg: "#FFFFFF", hoverBg: "#85C02A", activeBg: "#1E750C", focusBorder: "#1E750C" },
          { label: "Secondary Button", bg: "#BC7601", fg: "#FFFFFF", hoverBg: "#9B6100", activeBg: "#D7AB56", focusBorder: "#FEDF9E" }
        ],
        field: {
          label: "First Name", placeholder: "First Name",
          bg: "#FEDF9E", fg: "#022401", border: "#022401", hoverBg: "#D7AB56", caret: "#1E750C",
          errorBorder: "#BC2461", errorText: "#BC2461", errorMessage: "Invalid Input",   // Tulip Pink, as in Figma
          pattern: "^[A-Za-zÀ-ÿ' -]+$"
        }
      },
      { type: "image", src: "assets/projects/sprout-festival-design/style-tile.svg", alt: "UI style tile showing static, focused, active and hover states for primary and secondary buttons, static, hover, active, filled and error states for a text field, and the home, tickets, map, food truck and save icons", caption: "Style tile: button and field states, and the icon set.", wide: true },

      { type: "text", heading: "Mobile Interface", body: [
        "Instead of a traditional nav bar, the app uses a central home screen from which users explore key pages like merch and ticketing. Each leaf on the home page acts as a navigational element, encouraging exploration and giving the sense of zooming into a natural environment. I relied heavily on the primary font to keep the interface consistent and avoid visual noise, and the recurring leaf motif, used in checkmarks, save buttons and more, ties the visual language together.",
        "User testing raised concerns about legibility. I added flat backgrounds behind icons to reduce clutter and lowered the contrast of the leaf textures to improve text readability. Testers also found the cart unclear, so I added an item count on the cart icon and a total cost at the bottom of the cart page. These changes keep the interface visually cohesive and functionally clear."
      ]},
      { type: "gallery", images: [
        { src: "assets/projects/sprout-festival-design/screen-1-home.jpg", alt: "Home screen where leaves link to merch, tickets, food trucks and map", caption: "Home: each leaf is a navigation element." },
        { src: "assets/projects/sprout-festival-design/screen-2-merch.jpg", alt: "Merch browsing grid with save buttons", caption: "Browse merch." },
        { src: "assets/projects/sprout-festival-design/screen-3-item.jpg", alt: "Item detail for the Sprout t-shirt with size options", caption: "Item details, with the cart count badge." },
        { src: "assets/projects/sprout-festival-design/screen-4-cart.jpg", alt: "Cart showing one t-shirt and the total cost", caption: "Cart with total cost." },
        { src: "assets/projects/sprout-festival-design/screen-5-payment.jpg", alt: "Payment form with shipping and card details", caption: "Checkout." },
        { src: "assets/projects/sprout-festival-design/screen-6-confirm.jpg", alt: "Order confirmed screen with a leaf checkmark", caption: "Order confirmed." }
      ]},

      { type: "text", heading: "Conclusion", body: [
        "Over ten weeks, Sprout grew from a competitor analysis into a complete festival identity: a wordmark, colour palette and type system, a poster, wayfinding signage, a festival map and a mobile app for tickets and merch. Every piece draws on the same idea, that local food is something to celebrate and learn about, carried through the organic shapes of Bagel Fat One, the greens and browns of the palette and the recurring leaf motif.",
        "Grounding the work in research and personas shaped decisions well beyond the visuals. Mapping Sarah’s journey surfaced practical needs such as predictable pricing, designated seating and vendors grouped by cuisine, and walking through the merch flow showed how many small decisions a user makes and how clearly each one has to lead to the next."
      ]},
      { type: "list", heading: "Key takeaways", items: [
        "<strong>Test early and often.</strong> User testing caught problems I had missed: no way to navigate back from item details, legibility issues over the leaf textures and an unclear cart. Each round made the app clearer.",
        "<strong>Iterate in context.</strong> The signage and map improved most when I considered where they would actually stand. A vertical map, the area name at the top and a green sign that looks like it is sprouting from the ground all came from imagining the sign on Rainier Vista.",
        "<strong>A consistent visual language does a lot of work.</strong> Reusing the wordmark font, palette and leaf motif across print, wayfinding and UI made the festival feel like one cohesive experience."
      ]}
    ]
  },
  {
    slug: "rc-boat-propeller",
    title: "RC Boat Propeller",
    summary: "Designing, modelling and testing a custom propeller for a remote-control boat.",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/67c1519589592f0c27faf0d7/1741991662339-S8RV6UDS60H77FTAV663/Screenshot+2025-02-21+061610.png",
    hidden: false,
    featured: true,
    year: "2025",
    role: "Designer & Engineer",
    tools: ["CAD", "3D Printing"],
    tags: ["Product Design", "Prototyping"],
    sections: [
      { type: "text", heading: "Overview", body: "TODO: Describe the project goal." },
      { type: "text", heading: "Process", body: "TODO: Describe the design and testing process." },
      { type: "text", heading: "Outcome", body: "TODO: Results and reflections." }
    ]
  },
  {
    slug: "remote-operated-underwater-vehicle",
    title: "Remote Operated Underwater Vehicle",
    summary: "A team-built ROV designed for underwater exploration tasks.",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/67c1519589592f0c27faf0d7/1741932878080-Y5DSH1QMP0MFAA5PMZ71/WhatsApp+Image+2025-03-06+at+22.25.18.jpg",
    hidden: false,
    featured: true,
    year: "2025",
    role: "Team Member",
    tools: [],
    tags: ["Engineering", "Prototyping"],
    sections: [
      { type: "text", heading: "Overview", body: "TODO: Describe the project goal." },
      { type: "text", heading: "Process", body: "TODO: Describe the design and build process." },
      { type: "text", heading: "Outcome", body: "TODO: Results and reflections." }
    ]
  },
  {
    slug: "shower-system-redesign",
    title: "Shower System Redesign",
    summary: "Rethinking the everyday shower to be more accessible and intuitive.",
    thumbnail: "",
    hidden: false,
    featured: false,
    year: "",
    role: "",
    tools: [],
    tags: ["Accessibility", "Product Design"],
    sections: [
      { type: "text", heading: "Overview", body: "TODO: Describe the project goal." },
      { type: "text", heading: "Outcome", body: "TODO: Results and reflections." }
    ]
  },
  {
    slug: "soft-goods-prototyping",
    title: "Soft Goods Prototyping Process Log",
    summary: "A process log of sewing and iterating on soft-goods prototypes.",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/67c1519589592f0c27faf0d7/1769390817784-GZLH18MFLI7BT3ZE41KV/WhatsApp+Image+2026-01-25+at+17.26.12+%281%29.jpeg",
    hidden: false,
    featured: false,
    year: "2026",
    role: "Designer",
    tools: [],
    tags: ["Prototyping", "Soft Goods"],
    sections: [
      { type: "text", heading: "Overview", body: "TODO: Describe the project goal." },
      { type: "text", heading: "Process Log", body: "TODO: Document each iteration." }
    ]
  },
  {
    slug: "laser-cut-laptop-stand",
    title: "Laser Cut Laptop Stand Prototype",
    summary: "A flat-pack laptop stand prototyped with laser-cut sheet material.",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/67c1519589592f0c27faf0d7/1769994408011-6D0UGZFIQZAYY561COOR/WhatsApp+Image+2026-02-01+at+16.55.52+%284%29.jpeg",
    hidden: false,
    featured: false,
    year: "2026",
    role: "Designer",
    tools: ["Laser Cutter"],
    tags: ["Prototyping", "Product Design"],
    sections: [
      { type: "text", heading: "Overview", body: "TODO: Describe the project goal." },
      { type: "text", heading: "Process", body: "TODO: Describe the iterations." }
    ]
  }

  /* ---- TEMPLATE: copy this block (add a comma after the previous one) ----
  ,{
    slug: "my-new-project",            // unique, lowercase, dashes — used in the URL
    title: "My New Project",
    summary: "One-line description shown on the card.",
    thumbnail: "assets/projects/my-new-project/thumb.jpg",
    hidden: false,
    featured: false,
    year: "2026",
    role: "UX Designer",
    tools: ["Figma"],
    tags: ["UX/UI"],
    sections: [
      { type: "text", heading: "Overview", body: "..." },
      { type: "image", src: "assets/projects/my-new-project/hero.jpg", alt: "...", caption: "..." }
    ]
  }
  ------------------------------------------------------------------------ */
];
