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
    slug: "custera-website-design",
    title: "Custera Brand & Website",
    summary: "A brand book and a live, seven-page website for Custera, a startup making customer-centricity measurable for the C-suite.",
    thumbnail: "assets/projects/custera-website-design/cover.jpg",
    cover: "assets/projects/custera-website-design/cover.jpg",
    // Case-study page uses Custera's own design system (header/footer stay site-wide)
    theme: {
      bg: "#FBFCFD",                 // Neutral 000
      surface: "#FFFFFF",
      text: "#003366",               // Custera Navy — 12.28:1 on Neutral 000
      muted: "#5C636E",              // Neutral 600 — 5.9:1 on Neutral 000
      line: "rgba(0, 51, 102, 0.18)",
      accent: "#00746F",             // Teal 900 — 5.4:1 on Neutral 000
      accentInk: "#FFFFFF",
      fontSans: "'Avenir', 'Avenir Next', 'Nunito Sans', 'Segoe UI', system-ui, sans-serif",
      fontDisplay: "'Avenir Heavy', 'Avenir', 'Avenir Next', 'Nunito Sans', 'Segoe UI', system-ui, sans-serif",
      displayWeight: 800,            // Avenir Heavy
      googleFonts: ["Nunito Sans:wght@400;500;700;800"]   // stand-in where Avenir isn't installed, as in the Custera design system
    },
    hidden: false,
    featured: true,
    year: "2026",
    role: "Design Intern, Custera",
    tools: ["Figma", "Claude Design", "GitHub"],
    tags: ["Branding", "Web Design", "UX/UI"],
    sections: [
      { type: "text", heading: "Overview", body: [
        "<strong>Custera</strong> is a data, AI and advisory startup building a new enterprise category: making customer-centricity measurable, manageable and scalable. Its audience is the C-suite (CEOs, CFOs, CROs and CMOs at B2B enterprises), people who want proof rather than sentiment.",
        "As Custera’s design intern I created the company’s visual identity and brand book in Figma, then designed and built its website, which is now live at <a href=\"https://custera.ai\" target=\"_blank\" rel=\"noopener\">custera.ai</a>. Along the way I set up publishing pipelines so non-technical teammates can add articles, advisors and residents without touching code."
      ]},
      { type: "stats", items: [
        { value: "June 2026", label: "Start of internship, ongoing" },
        { value: "Brand book", label: "Logo, colour, type, social & LinkedIn assets" },
        { value: "7 pages", label: "Plus a residency program and articles" },
        { value: "Live", label: "Shipped at custera.ai" }
      ]},

      { type: "text", heading: "The Challenge", body: [
        "Custera’s core message comes down to one statistic: <strong>95% of CXOs say they are customer-focused, but only 8% of customers agree.</strong> The brand had to make that gap feel urgent, and present Custera as the rigorous, numbers-first answer to it.",
        "Before any design work I did competitive market and branding research to see how neighbouring categories present themselves and where Custera could stand apart. That research shaped the positioning the website now makes explicit: Custera is not another CX platform or survey score. It borrows the credibility model of ratings agencies, with a published method and a proprietary calibration."
      ]},
      { type: "table", heading: "Positioning",
        caption: "How Custera is positioned against neighbouring categories, as set out on the website.",
        columns: ["CX platforms", "NPS & Voice of the Customer", "Ratings agencies & ESG scorers", "Custera"],
        highlightColumn: 4,
        rows: [
          ["What it does", "Manages feedback, journeys and service interactions", "Captures a single sentiment signal", "Scores organizations on a published, independent method", "Measures how well the whole organization understands, delights and elevates customers"],
          ["Owner", "CX or service teams", "Marketing or insights teams", "Investors and boards", "The whole C-suite: CEO, CFO, CRO and CMO"],
          ["Link to value", "Indirect", "Weak; sentiment does not explain financial value", "Strong, but not customer-specific", "Benchmarked against churn, expansion, pipeline and margin"],
          ["Insight", "Touchpoint-level", "One signal", "Transparent method, private calibration", "A management system, not a dashboard"]
        ]
      },

      { type: "text", heading: "Logo", body: [
        "Early explorations stacked a <strong>C</strong> and an <strong>a</strong> into a monogram. They read as a monogram but said nothing about the business, so I moved to a C enclosing a teal oval: the customer, literally at the centre. Navy and teal split the mark the same way they split the brand, with navy as the structure and teal as the customer.",
        "The wordmark carries the same accent, a teal <strong>a</strong> at the end of a navy “Custer”. Details mattered at small sizes. The oval is centred in the C’s opening with an equal gap on both sides, and the nav version was re-cropped after the bottom of the C was being clipped."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/logo-ca.png", alt: "Three early Ca monogram explorations in navy and teal, and the monogram beside the Custera wordmark", caption: "Early “Ca” monogram explorations." },
        { src: "assets/projects/custera-website-design/logo-current.png", alt: "The final C mark with a teal oval beside the Custera wordmark, with and without the tagline", caption: "The final mark: the customer at the centre." }
      ]},
      { type: "text", body: "The tagline, <strong>“Customer-Centricity, Engineered”</strong>, went through four lockup tests: under the wordmark, in caps, stacked and set to the side. The final lockup runs the tagline the full width beneath the mark and wordmark, from the left edge of the C to the right edge of the a. The header uses the simpler mark-and-wordmark version so the navigation stays clean, and the footer uses the full lockup in white." },
      { type: "image", src: "assets/projects/custera-website-design/tagline-tests.png", alt: "Four tagline lockup tests: tagline under the wordmark, in capitals, stacked beside the mark, and set to the right behind a second divider", caption: "Tagline lockup tests." },
      { type: "image", src: "assets/projects/custera-website-design/logos.png", wide: true, alt: "Logo system: main logo, small-application logo, icon and wordmark, each in full colour, white on teal, white on navy and greyscale", caption: "The logo system: main, small-application, icon and wordmark variants in full colour, greyscale, and white on teal and navy." },

      { type: "text", heading: "Colour", body: [
        "Custera talks to finance-minded executives, so the palette needed to feel trustworthy first. <strong>Custera Navy</strong> carries authority and <strong>Custera Teal</strong> adds a fresher, more human accent. Each primary has five tints for fills, charts and depth, and the neutrals handle text, backgrounds and structure.",
        "Navy on white reaches 12.61 : 1. Bright teal on white is only 3.2 : 1, so wherever small teal text needs to read on light backgrounds the darker Teal 900 (5.63 : 1) takes over. Three accents were added later, as the site needed them: yellow, cyan and coral for categorizing Insights articles and flagging form errors."
      ]},
      { type: "palette",
        background: "#FFFFFF",
        color: "#003366",
        textFont: "'Avenir', 'Avenir Next', 'Nunito Sans', sans-serif",
        groups: [
          { label: "Primary", swatches: [
            { name: "Custera Navy", hex: "003366" }, { name: "Custera Teal", hex: "00A19A" } ] },
          { label: "Navy tints: fills, charts, depth", swatches: [
            { name: "Navy 900", hex: "001F3F" }, { name: "Navy 700", hex: "003366" }, { name: "Navy 500", hex: "2E5C8A" }, { name: "Navy 300", hex: "7C9DBF" }, { name: "Navy 100", hex: "D6E1EC" } ] },
          { label: "Teal tints: accents, highlights, data", swatches: [
            { name: "Teal 900", hex: "00746F" }, { name: "Teal 700", hex: "00A19A" }, { name: "Teal 500", hex: "4DBFB9" }, { name: "Teal 300", hex: "99DCD8" }, { name: "Teal 100", hex: "E0F4F2" } ] },
          { label: "Neutrals: text, backgrounds, structure", swatches: [
            { name: "Neutral 900", hex: "1A1D21" }, { name: "Neutral 600", hex: "5C636E" }, { name: "Neutral 400", hex: "AEB4BD" }, { name: "Neutral 100", hex: "EFF1F4" }, { name: "Neutral 000", hex: "FBFCFD" } ] },
          { label: "Accents: callouts & categories", swatches: [
            { name: "Yellow", hex: "FFD726" }, { name: "Cyan", hex: "33B6D0" }, { name: "Coral", hex: "FF6A4D" } ] }
        ],
        samples: { label: "Contrast Accessibility", items: [
          { text: "Contrast Ratio 12.61 : 1", bg: "#FFFFFF", fg: "#003366" },
          { text: "Contrast Ratio 5.63 : 1", bg: "#00746F", fg: "#FFFFFF" },
          { text: "Contrast Ratio 11.04 : 1", bg: "#E0F4F2", fg: "#003366" }
        ]}
      },
      { type: "gallery", heading: "Palette alternatives", columns: 4, images: [
        { src: "assets/projects/custera-website-design/alt-green.png", outline: true, alt: "Alternative palette pairing navy with green", caption: "Navy & green." },
        { src: "assets/projects/custera-website-design/alt-yellow.png", outline: true, alt: "Alternative palette pairing navy with yellow", caption: "Navy & yellow." },
        { src: "assets/projects/custera-website-design/alt-blue.png", outline: true, alt: "Alternative palette pairing navy with a brighter blue", caption: "Navy & blue." },
        { src: "assets/projects/custera-website-design/alt-maroon.png", outline: true, alt: "Alternative palette pairing maroon with orange", caption: "Maroon & orange." }
      ]},
      { type: "text", body: "Every alternative used the same structure of primaries, tints and neutrals, so the comparison was purely about colour. Navy and teal won because teal stays calm next to navy while still standing out as an accent. It also works in data: teal for highlights and data points, navy for fills and depth layering." },

      { type: "text", heading: "Typography", body: [
        "The brand uses one family in two weights: <strong>Avenir Heavy</strong> for headings and <strong>Avenir Regular</strong> for body copy. Avenir’s geometric but warm shapes sit well beside the rounded C mark, and a single family keeps dense, data-heavy pages calm.",
        "I also explored a three-tier system with a separate italic call-out face, but it added noise without adding meaning. Emphasis on the site comes from weight and colour instead: in the homepage headlines, key phrases switch to teal Avenir Heavy within otherwise regular-weight lines."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/type.png", outline: true, alt: "Type specimen: Avenir Heavy for headings and Avenir Regular for body text", caption: "Final: Avenir Heavy and Avenir Regular." },
        { src: "assets/projects/custera-website-design/type-alt.png", outline: true, alt: "Alternative type specimen with a geometric heading font, a body font and an italic call-out font", caption: "Explored: a three-tier system with a call-out face." }
      ]},

      { type: "text", heading: "Brand Applications", body: [
        "The brand book also covers how the identity shows up beyond the website. I designed personal and company LinkedIn banners in white, navy and teal, plus a LinkedIn company icon, so the team presents one consistent face.",
        "For Custera’s people programs I designed reusable templates: residency welcome and graduation cards, a certificate of completion, and an advisory board welcome card. Each has photo and name slots so anyone on the team can produce them."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/linkedin.png", alt: "Personal LinkedIn banners in white, navy and teal, company banners in the same three colours, and the LinkedIn company icon", caption: "LinkedIn banners and company icon." },
        { src: "assets/projects/custera-website-design/social.png", alt: "Templates for a residency program welcome card, graduation card, certificate of completion and advisory board welcome card", caption: "Residency and advisory board templates." }
      ]},

      { type: "text", heading: "Site Structure", body: [
        "Every page answers one question a C-suite visitor would ask, in roughly the order they would ask it. The homepage previews each page in turn and links on with a “See …” call to action, so it works as both a summary and a route map.",
        "I designed the site in Figma first, then built it in Claude Design on a <strong>Custera Design System</strong> I set up from the brand book. Tokens for colour, type and spacing mean every page shares the same navy, teal and Avenir rules."
      ]},
      { type: "table",
        caption: "Site map: each page and the question it answers.",
        corner: "Page",
        columns: ["Question it answers", "Key content"],
        rows: [
          ["Home", "What is Custera, and why now?", "Animated leadspace, rotating sourced statistics, a preview of every page, FAQ"],
          ["Who we serve", "Is this for me?", "The CEO, CFO, CRO and CMO problem each solves; four B2B industries with sourced benchmarks"],
          ["Our work", "How does it work?", "The framework rings, three capabilities, the IP layer and the advisory offers"],
          ["Our value", "What is it worth?", "Four agendas converging on the customer, five problems, and the value tiles linked to enterprise value"],
          ["Who we are", "Who is behind it?", "An interactive operating model: founder, advisory board, partners, associates and residency program"],
          ["Insights", "Do they know their stuff?", "Forward, Counterpoint and In Action articles with filters"],
          ["Start the conversation", "How do I begin?", "A short enquiry form and what happens next"]
        ]
      },

      { type: "text", heading: "The Leadspace", body: [
        "The homepage opens with the brand. In Figma I designed the hero as the logo beside a rotating set of headlines, and storyboarded an intro in which the logo assembles itself.",
        "On the live site, a teal fill shrinks down into the logo’s oval, the C sweeps around it and the divider grows. The wordmark and tagline wipe in from left to right, then clear from right to left, and the headline carousel wipes in to take their place. The tagline is timed so the wordmark only starts once the tagline reaches it, so the two lines move as one."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/hero-figma.png", outline: true, alt: "Figma design of the homepage header and hero with a navy headline and a large grey C in the corner", caption: "First hero concept in Figma." },
        { src: "assets/projects/custera-website-design/leadspace-anim.png", outline: true, alt: "Storyboard frames: a teal oval shrinking, the C forming around it, the divider appearing, and the wordmark and tagline arriving", caption: "Storyboard for the intro animation." }
      ]},
      { type: "image", src: "assets/projects/custera-website-design/site-home-hero.jpg", wide: true, alt: "Live Custera homepage hero: the navy and teal C mark, a thin divider, and the headline: A new enterprise category, we make customer-centricity measurable, manageable and scalable", caption: "The live leadspace once the intro settles." },
      { type: "list", heading: "Refinements", items: [
        "<strong>Wait for the intro.</strong> The carousel holds its first headline until the logo animation finishes, then rotates every five seconds.",
        "<strong>No overlapping text.</strong> Fading slides briefly overlapped, so slides now travel left through a clipped frame and only one headline is ever visible.",
        "<strong>Align to the grid.</strong> The mark’s left edge lines up with the nav logo, the carousel’s right edge with the “Start the conversation” button, and the divider sits an equal 72px from both.",
        "<strong>Quiet supporting details.</strong> The divider became thinner and a lighter neutral, and a large greyscale C was moved to the bottom-right corner as background texture.",
        "<strong>Mobile.</strong> The logo and wordmark sit on one line, wipe out together in a single sweep, and leave only the carousel so the hero takes less height. The greyscale C is hidden.",
        "<strong>Reduced motion.</strong> Visitors who prefer reduced motion see the finished state straight away."
      ]},

      { type: "text", heading: "Homepage", body: [
        "Below the leadspace, alternating navy, white and teal bands give each page preview its own section while keeping the colours in rotation. Statistics rotate through the same clipped carousel as the hero, and every figure is credited to its source (Gartner, CustomerGauge and Forrester), because this audience will check.",
        "The FAQ answers the questions people ask before they engage, grouped into four collapsible sections. It is also published as FAQPage structured data so search engines and AI assistants can read Custera’s answers directly."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/site-home-who-we-serve.jpg", alt: "Navy homepage section, Leaders who own the outcome, with a rotating statistic, the audience and focus sectors", caption: "Who we serve, with a rotating sourced statistic." },
        { src: "assets/projects/custera-website-design/site-home-our-work.jpg", alt: "Homepage section, One system not a slide deck, with three capabilities beside a ring diagram", caption: "Our work, with the framework diagram." },
        { src: "assets/projects/custera-website-design/site-home-our-value.jpg", alt: "Teal homepage section with five value tiles: revenue leakage, customer churn, customer expansion, pipeline, revenue and margins", caption: "Our value: five tiles that animate in from left to right." },
        { src: "assets/projects/custera-website-design/site-home-who-we-are.jpg", alt: "Navy homepage section with six circular icons for the operating model", caption: "Who we are: the operating model at a glance." },
        { src: "assets/projects/custera-website-design/site-home-faq.jpg", alt: "FAQ section with four collapsible groups", caption: "FAQ in four collapsible groups." },
        { src: "assets/projects/custera-website-design/site-home-cta-footer.jpg", alt: "Teal call to action, Let’s talk about where to start, above the navy footer", caption: "Closing call to action and navy footer." }
      ]},

      { type: "text", heading: "Who We Serve", body: "The page opens with the four C-suite roles placed inside the curve of the greyscale C. Each role circle sits exactly on the C’s centreline, which took some care because the C’s inner and outer edges are not concentric. Below, each leader’s problem sits beside how Custera solves it, followed by four industries, each with one sourced benchmark." },
      { type: "gallery", columns: 3, images: [
        { src: "assets/projects/custera-website-design/site-who-we-serve-hero.jpg", alt: "Who we serve hero with CEO, CFO, CRO and CMO circles around a large grey C", caption: "The C-suite around the C." },
        { src: "assets/projects/custera-website-design/site-who-we-serve-leaders.jpg", alt: "Navy section pairing each leader’s problem with Custera’s answer in teal panels", caption: "Problem and answer, per leader." },
        { src: "assets/projects/custera-website-design/site-who-we-serve-industries.jpg", alt: "Four industry cards with a large statistic each: 86%, 31, 5.7 and 65%", caption: "Four industries, four benchmarks." }
      ]},

      { type: "text", heading: "Our Work", body: [
        "Custera’s offer is layered: customer-centricity at the core, proprietary IP to measure it and advisory to make it real. I turned that into a concentric rings diagram. The centre holds the three capabilities (Listening, Delighting and Elevating) with signal-style bars that rise from left to right, and the outer rings carry the IP and advisory layers.",
        "The rings are one shared component used on both the homepage and this page, so every label or spacing change only had to be made once. The rest of the page follows the same layers outward: three capability cards, the measure-benchmark-act IP layer, and the advisory offers that start with a Compass assessment."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/site-our-work-framework.jpg", alt: "Our work hero with concentric rings labelled Advisory and IP around a Customer Centricity hub, beside three expandable cards", caption: "The framework rings." },
        { src: "assets/projects/custera-website-design/site-our-work-capabilities.jpg", alt: "Three capability cards: Listening, Delighting and Elevating", caption: "Three capabilities, built in order." },
        { src: "assets/projects/custera-website-design/site-our-work-ip.jpg", alt: "Navy section with three rows: Measure, Benchmark and Act", caption: "The IP layer." },
        { src: "assets/projects/custera-website-design/site-our-work-advisory.jpg", alt: "Teal section with a Compass assessment card above three offer cards and an enablement panel", caption: "The advisory layer." }
      ]},

      { type: "text", heading: "Our Value & Who We Are", body: [
        "<strong>Our value</strong> makes the financial case. A simple diagram shows the CEO’s, CFO’s, CRO’s and CMO’s agendas converging on one shared priority, the customer. Five common problems follow, and then the value tiles, each pointing up or down, roll up into enterprise value.",
        "<strong>Who we are</strong> presents Custera’s operating model as six clickable roles: founder, advisory board, partners, associates, residency program and AI-native. Each opens a short description of how it works and who drives it, which keeps a lot of information behind one simple row."
      ]},
      { type: "gallery", columns: 2, images: [
        { src: "assets/projects/custera-website-design/site-our-value-agendas.jpg", alt: "Navy diagram where CEO, CFO, CRO and CMO boxes connect down to a teal bar labelled The customer", caption: "Four agendas become one." },
        { src: "assets/projects/custera-website-design/site-our-value-compounds.jpg", alt: "Teal section with five value tiles feeding into an Enterprise Value bar", caption: "Where it shows up in the numbers." },
        { src: "assets/projects/custera-website-design/site-who-we-are.jpg", alt: "Who we are page with a navy hero and six operating-model icons", caption: "The operating model." },
        { src: "assets/projects/custera-website-design/site-contact.jpg", alt: "Start the conversation page with three next steps and an enquiry form", caption: "Start the conversation." }
      ]},

      { type: "text", heading: "Insights & Publishing", body: [
        "Custera publishes three kinds of article: <strong>Forward</strong> (where the market is going), <strong>Counterpoint</strong> (contrarian with purpose) and <strong>In Action</strong> (what customer-centric companies do differently). Each type has its own colour, and the Insights page features the newest article above a multi-select filter.",
        "The people writing these articles aren’t developers, so I built a pipeline around them. A prompt template turns a Word document into a finished article page with the right file name and folder. When it is uploaded to GitHub, an automated workflow rebuilds the article list, and the new piece appears on the site. Each article has a print-ready PDF download and a share button that opens the phone’s own share sheet on mobile."
      ]},
      { type: "image", src: "assets/projects/custera-website-design/site-insights.jpg", wide: true, alt: "Insights page with a featured article, a filter bar for Forward, Counterpoint and In Action, and article cards", caption: "Insights: the featured article, filters and article cards." },

      { type: "text", heading: "Residency Program", body: [
        "I also designed the page for Custera’s residency program, an international, credit-eligible internship. It explains what makes the program different, shows the five workstreams through a filterable project carousel and introduces the current cohort.",
        "The application form uses the same rules as the rest of the site. Required fields, LinkedIn URLs and email addresses are checked as you go, with errors shown in coral. The cohort and advisory board carousels read from simple spreadsheet files, so adding a person means adding a row and a photo."
      ]},
      { type: "gallery", columns: 3, images: [
        { src: "assets/projects/custera-website-design/site-residency-hero.jpg", alt: "Navy residency program hero with a large grey C", caption: "Residency program hero." },
        { src: "assets/projects/custera-website-design/site-residency-why.jpg", alt: "Four cards explaining what makes the residency different", caption: "Why it is different." },
        { src: "assets/projects/custera-website-design/site-residency-workstreams.jpg", alt: "Residency projects carousel with skill filter chips", caption: "Workstreams with a skill filter." }
      ]},

      { type: "text", heading: "Responsive Design", body: "Every page is responsive. Below 860px the navigation collapses into a menu and multi-column layouts stack. The framework rings scale down and stay centred on small screens, and grids are adjusted so no tile sits alone, such as the last value tile spanning both columns. The shared header, footer and mobile styles live in one place, so a fix applies across the whole site." },

      { type: "text", heading: "Conclusion", body: [
        "In a few months Custera went from a name to a full identity and a live website: a logo system, palette and type, LinkedIn and program assets, and seven pages that walk a C-suite visitor from the problem to a conversation. Everything traces back to one idea, the customer at the centre, in the C mark, the navy-and-teal split and the concentric rings diagram.",
        "Working inside a startup meant the site kept changing as the business did. New article types, a residency program and an advisory board arrived after launch, which pushed me to design systems and pipelines rather than one-off pages."
      ]},
      { type: "list", heading: "Key takeaways", items: [
        "<strong>Design for the people who maintain it.</strong> The publishing pipelines matter as much as the pages. Teammates can publish an article or add an advisor without asking a designer.",
        "<strong>Motion needs as much precision as layout.</strong> The leadspace took many rounds of alignment, timing and clipping before it felt seamless, and a version for reduced motion and one for mobile.",
        "<strong>Credibility is a design problem.</strong> For a skeptical executive audience, sourced statistics, a restrained palette and consistent structure persuade more than decoration does."
      ]}
    ]
  },
  {
    slug: "rc-boat-propeller",
    title: "RC Boat Propeller",
    summary: "Designing, modelling and testing a custom propeller for a remote-control boat.",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/67c1519589592f0c27faf0d7/1741991662339-S8RV6UDS60H77FTAV663/Screenshot+2025-02-21+061610.png",
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
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
