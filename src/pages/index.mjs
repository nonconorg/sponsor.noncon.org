export const View = state => [
  HeroImage(state),

  div([
    h1('NONCON2020 Sponsor Deck'),

    p(
      Link({
        text: 'Event Announcement Blogpost',
        to: 'https://www.parallele.at/not-a-conference-not-a-conjob/',
      }),
    ),
    p(Link({ text: 'NONCON2020 website', to: 'https://noncon.org' })),
    p(Link({ text: 'Virtual noncon website', to: 'https://interspace.noncon.org' })),
    p(
      Link({
        text: 'Speaker / Sponsor Signup Form',
        to: 'https://the-commons-stack.typeform.com/to/SemYgK',
      }),
    ),
    p(Link({ text: 'Our wallet address', to: 'https://etherscan.io/enslookup?q=noncon.eth' })),

    p(['contact: ', Link({ to: 'mailto:info@parallele.at' }, 'info@parallele.at')]),

    p([
      'Event produced by ',
      Link({ to: 'https://parallele.at' }, 'Parallele Polis'),
      ' and ',
      Link({ to: 'riat.at', text: 'riat.at' }),
    ]),

    p([
      'All prices quoted are payable in Cryptocurrency of your choice,',
      ' and will not include VAT, as we are a registered non-profit.',
      ' Which means your support is potentially tax-deductible, based on your jurisdiction. Yay!',
    ]),

    h3('Some numbers:'),

    p('(as of 27.02.20)'),

    p('current applications to attend: 60'),
    p('current number of confirmed speakers: 18'),
    p('sponsor applications: 10'),
    p('community partners: 17'),
    p('media partners: 1'),

    p('Extrapolated expected attendance: 300'),
  ]),

  div({ class: 'SponsorTier' }, [
    h2('NONCON2020 "Presented by"'),
    h3('(One Slot @ 20,020 Euros)'),

    p([
      `We don't need this "Ultra Tier" amount to produce the event,`,
      ' the sponsor tiers below will cover that.',
    ]),

    p('This is about Prestige, Honor, and Recognition.'),

    p([
      'The Institution, Foundation, Product (or Whale) that sponsor this slot',
      ' does so because they recognize the skillset, values,',
      ' and goals of the Parallele Polis Team,',
      ' and want to support their efforts for the rest of the 2020 calendar year.',
      " We won't accept this contribution from just ANYONE though. We'll have to respect you too.",
    ]),

    p([
      'There is no booth, workshop, or other services offered for this slot',
      ' beyond visual branding in meatspace and cyber-cyberspace.',
      ' The only Perk is that we will carry the commitment over to',
      ' the main Parallele Polis website,',
      ' and all venues we work and produce events in this year.',
    ]),

    p([
      "It's essentially a Grant,",
      ' with no strings attached because you trust us to use the donation wisely,',
      ' in part to compensate our volunteers during the event,',
      ' and to give the speakers a token amount to cover their costs.',
    ]),
  ]),

  div({ class: 'SponsorTier' }, [
    h2('Corona Virus Disruption Response'),
    h3('(One Slot @ 15,020 Euro)'),

    h4('Fund implementation of NonCon Live Mobile Viewer App'),

    p(Link({ to: 'https://github.com/videoDAC/community/issues/1' }, b('link to proposal'))),

    p([
      'This open source application can be used for any other events',
      ' which have been disrupted by Corona Virus,',
      ' or just those who wish to share live audio and video content',
      ' with their audiences all over the world.',
      ' Utilizing videoDAC, Livepeer, and swarm',
      ' with potential implementation of probabalistic micropayment streaming',
      ' with Orchid or Sabilier',
    ]),

    p(b('Sole Logo placement on Mask schwag together w/ NONCON Logo')),

    Img({ class: 'center small', src: '/img/bandana.png' }),

    p(b('4 (Four) staff passes incl. Off-location Sponsors Dinner (Sunday)')),
    p(b('4 (Four) dev / guest passes**')),
    p('Pre-event blog post & post-event communication.'),
    p('Logo on all digital & swag promo material.'),
    p('Logo on event roll-ups and posters'),
    p('Social media publishing during event'),
    p('copyright-free professional photos of your event presence'),
  ]),


  div({ class: 'SponsorTier' }, [
    h2('Tier One'),
    h3('(Three Slots @ 10,020 Euro / slot)'),

    p(b('15 mins to explain your tech at the Opening Ceremony (Friday)')),
    p(b('One four hour workshop slot')),
    p(b('(ability to add additional 5,050 Euro hack bounty for your tech, payable directly to winner, announced at Monday Closing Ceremony)')),
    p(b('Large table & space in RECEPTION area (max 3m x 2m) for ALL FOUR DAYS of the event, furniture provided by NONCON2020')),
    p(b('Logo on all Speaker / Talk announcement slides')),
    p(b('Logo on Livestream Window for the whole event')),
    p(b('6 (Six) staff passes including Off-location Sponsors Dinner (Sunday)')),
    p(b('6 (Six) pieces limited edition Parallele Polis insider brag schwag w/ NFT provenance Token')),
    p(b("4 (Four) passes for Fiaker Horse Carriage Tour of Vienna's Historical 1st District (Monday)")),
    p([b('10 (Ten) guest passes'), '(freely distrubutable before or during event, also valid for PARTY on Saturday night)']),
    p(b("Customizable experience - what's your idea?")),
    p([b('Large Logo '), 'on all digital & swag promo material.']),
    p('Logo on event roll-ups and posters.'),
    p('Social media publishing during event.'),
    p('copyright-free professional photos of your event presence.'),
  ]),

  div({ class: 'SponsorTier' }, [
    h2('Tier Two'),
    h3('(Five Slots @ 5,020 Euro / slot)'),

    p(b('(add additional 2,020 Euro hack bounty for your tech, payable directly to winner, announced on Monday)')),
    p(b('Table & space in CONFERENCE area (max 2m x 2m) furniture provided by NONCON2020')),
    p(b('One hour workshop slot')),
    p(b('4 (Four) staff passes incl. Off-location Sponsors Dinner (Sunday)')),
    p(b('4 (Four) dev / guest passes')),
    p('Pre-event blog post & post-event communication.'),
    p('Logo on all digital & swag promo material.'),
    p('Logo on event roll-ups and posters'),
    p('Social media publishing during event'),
    p('copyright-free professional photos of your event presence'),
  ]),


  div({ class: 'SponsorTier' }, [
    h2('Tier Three'),
    h3('(Ten Slots @ 1,020 Euro / slot)'),

    p(b('2 (Two) sponsors passes including Off location Sponsors Dinner (Sunday)')),
    p(b("2 (Two) passes for Fiaker Horse Carriage Tour of Vienna's Historical 1st District (Monday)")),
    p(b('10 (Ten) guest passes')),
    p('Pre-event blog post & post-event communication.'),
    p('Logo on all digital & swag promo material.'),
    p('Logo on event roll-ups and posters'),
    p('copyright-free professional photos of your event presence'),
    p('Social media publishing during event.'),
  ]),
]
