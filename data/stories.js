// data/stories.js
export const stories = {
  'ดอกส้มสีทอง': [
    {
      title: 'ตอนที่ 1: ความตั้งใจของดอกส้ม',
      content: `'เรยา'สาวสวยที่ถูกเลี้ยงดูมาในครอบครัวที่ยากจน เรยาเกลียดการไปโรงเรียนมาก และเรียนหนังสือมาก เรยานั้นมีฝันยิ่งใหญ่ในวัยเด็กอยู่อย่างหนึ่ง ซึ่งก็คือการได้เป็นนางฟ้า เมื่อโตขึ้นเรยาจึงต้องการประกอยอาชีพแอร์โฮสเตส ...ครั้งเมื่อเธออายุได้ 20ปี เธอได้ไปสัมภาษณ์งานที่บริษัทการบินแห่งหนึ่ง และได้พบกับผู้อำนวยการฝ่ายบุคคล เขาเป็นชายหนุ่มวัยกลางคน ท่าทางอบอุ่นและร่ำรวย ผู้ชายคนนี้มีชื่อว่า 'สินธร' เขารู้สึกชอบเธอมากจนยอมให้ความช่วยเหลือทางการเงิน โดยมีเงื่อนไขว่าเธอต้องเข้าไปอยู่ในชีวิตของเขา...`,
      choices: [
        {
          text: 'ยอมรับข้อเสนอเพื่ออนาคตที่ดีกว่า',
          nextChapter: 1,
        },
        {
          text: 'ปฏิเสธและกลับไปใช้ชีวิตแบบเดิมๆ',
          nextChapter: 2,
        },
      ],
    },
    {
      title: 'ตอนที่ 2: ความรักกับการหลอกลวง',
      content: `เรยา เลือกที่จะตกลงรับข้อเสนอจากคุณสินธร เธอเริ่มสวมบทบาทผู้หญิงผู้มอบความรักให้แก่เขา แต่ไม่นานเธอก็พบว่า สินธรมีภรรยาและลูกสาวหนึ่งคน เรยาจึงตัดสินใจ...`,
      choices: [
        {
          text: 'เดินหน้าต่อเพื่ออาชีพที่ใฝ่ฝัน',
          nextChapter: 3,
        },
        {
          text: 'ยอมแพ้ต่อฝันอันยิ่งใหญ้แต่เพียงเท่านี้',
          nextChapter: 4,
        },
      ],
    },

    {
      title: 'ตอนที่ 4: สุดท้ายของความรัก',
      content: `ในที่สุด เรยาต้องตัดสินใจระหว่างการเลือกที่จะทิ้งทุกอย่างและกลับไปใช้ชีวิตที่ซื่อสัตย์ หรือจะเดินหน้าต่อเพื่อชีวิตที่เธอคิดว่าเธอสมควรได้รับ...`,
      choices: [
        {
          text: 'ยอมรับความจริงและเดินตามทางที่เหมาะสม',
          nextChapter: 7,
        },
        {
          text: 'ต่อสู้เพื่อชีวิตใหม่ที่หรูหรา',
          nextChapter: 8,
        },
      ],
    },
    
    {
      title: 'ตอนที่ 3: เส้นบางๆที่ไม่อาจข้ามได้',
      content: `เรยา มีโอกาสพบกับผู้หญิงซึ่งเป็นภรรยาของสินธรอยู่บ่อยครั้ง แต่ทุกครั้งที่พบกันบรรยากาศระหว่างทั้งสองจะไม่สู้ดีเสียเท่าไหร่ หญิงสาวผู้เลอโฉมท่านนี้มีชื่อว่า 'เด้นจันทร์' ...วันหนึ่ง เรยาเข้ามาซื้อกระเป๋าในร้านแบรนด์เนม แต่ภาพที่ปรากฎคือ เด่นจันทร์ผู้กำลังชายตามองและพิจารณากระเป๋าที่อยู่ตรงหน้าของตน พร้อมมีพนักงานฝ่ายการขายคอยอธิบายสรรพคุณอยู่ห่างๆ เด่นจันทร์ในบ่นกับตวเองว่ากระเป๋าใบนี้ราคาแพง เมื่อเรยาได้ยินเช่นนั้น จึงถือโอกาสได้แสดงความสามารถด้านการประชดประชันให้เด่นจันทร์รับรู้
       เรยา รอจังหวะที่เด่นจันทร์วางมือจากกระเป๋าใบที่ดูถูกอกถูกใจ เมื่อโอกาสมาถึง เรยาจึงรีบเดินไปหยิบกระเป๋าใบนั้นที่เด่นจันทร์เพ่งเล็งเอาไว้ในตอนแรก...
       "ขอโทษ คุณหยิบใบที่ชั้นกำลังจะซื้อไป ขอคืนด้วย" เด่นจันทร์พูดด้วยน้ำเสียงไม่พอใจทันที เมื่่อเห็นสิ่งที่ตนหมายปองไปอยู่ในมือของคนอื่น "ขอคืน? งั้นกลัวจะไม่ได้นะคะ เพราะว่าชั้นกำลังจพซื้อใบนี้เหมือนกัน" เรยาสวนกลับด้วยความมั่นใจ พร้อมบรรยากาศในร้านที่ดูกดดันขึ้น ไม่นานเด่นจันทร์ได้บอกให้พนักงานไปหยิบใบใหม่แล้วคิดเงินให้ตนทันที แต่พนักงานบอกว่าใบที่เรยาถือนั้นเป็นใบสุดท้ายในร้าน เด่นจันทร์ได้ยินดังนั้น จึงพยายามสั่งให้เรยาวางมือจากกระเป๋าใบนั้นแล้วมอบให้ตนเองเสีย แต่เรยาก็พยายามใช้สิทธิ์ของผู้ซื้อส่งกระเป๋าให้พนักงานคิดเงิน
       กระเป๋าเพิ่งถึงมือพนักงานได้ไม่นาน เด่นจันทร์ก็พูดว่า "หนู! ชั้นเอาใบนี้ แล้วบอกให้คุณมลส่งบิลไปเก็บที่บ้าน รู้ใช่ไหม ว่าคุณมลจะขายให้ใคร" เด่นจันทร์สั่งพนักงานขณะเดียวกันก็เป็นการเตือนเรยาว่าบทสรุปของเื่องครั้งนี้จบลงด้วยอำนาจที่ตนมีเรียบร้อยแล้ว เรยาจึงพูดว่า.... `,
      choices: [
        {
          text: 'ไม่สำเร็จหรอกคุณ เพราะฉันซื้อกระเป๋าใบนี้แล้ว',
          nextChapter: 5,
        },
        {
          text: 'สำเร็จแล้วคุณ',
          nextChapter: 6,
        },
      ],
    },
    // Add more chapters as needed...
  ],
};