      let quotes = [
        {
          "quote": "It’s easier to fool people...than to convince them they have been fooled.",
          "author": "Mark Twain"
        },
        {
          "quote": "There are two ways to be fooled. One is to believe what isn’t true; the other is to refuse to believe what is true.",
          "author": "Soren Kierkegaard"
        },
        {
          "quote": "It is dangerous to let the public behind the scenes. They are easily disillusioned and then they are angry with you, for it was the illusion they loved.",
          "author": "W. Somerset Maugham"
        },
        {
          "quote": "I believe that if life gives you lemons, you should make lemonade...And try to find somebody whose life has given them vodka, and have a party.",
          "author": "Ron White"
        },
        {
          "quote": "If you wish for you and your family to have a happy, healthy, long life, then ignore conventional wisdom.",
          "author": "Anonymous"
        },
        {
          "quote": "I have nightmares that I'm going to wake up, and everyone's driving a Prius and living in a condo, and we're all getting health insurance.",
          "author": "Kid Rock"
        },
        {
          "quote": "Straight men just can't imagine the bliss of being in a relationship with someone who finds farting as funny as they do.",
          "author": "Graham Norton"
        },
        {
          "quote": "Get your facts first, then you can distort them as you please.",
          "author": "Mark Twain"
        },
        {
          "quote": "Governing a great nation is like cooking a small fish - too much handling will spoil it.",
          "author": "Lao Tzu"
        },
        {
          "quote": "Don't sweat the petty things and don't pet the sweaty things.",
          "author": "George Carlin"
        },
      ];

      const btn = document.getElementById("btn");
      const quote = document.getElementById("quote");
      const author = document.getElementById("author");

      btn.addEventListener('click', getQuote);

      function getQuote () {

        let number = Math.floor(Math.random() * quotes.length);

        quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
        author.innerHTML = '<span>--</span>' + quotes[number].author;


      }


  