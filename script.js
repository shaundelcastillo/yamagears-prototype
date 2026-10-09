const products = [
    // PRIMARY PRODUCTS: Apparel & Merchandise
    { 
        id: 1, 
        name: "Yama Gears Trail Jersey MTB", 
        category: "jersey", 
        type: "merch", 
        price: 1250, 
        specs: "Breathable Mesh, Quick-Dry, Japan Fabric", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/474109818_10040388159310241_2137057276779076982_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1500&ctp=s1200x1500&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FYI-LaajniMQ7kNvwEEL4wN&_nc_oc=AdprCdZ72iu18JJYG-EzTL31eEm6A7jDRIHq3NGAPfKj3Kr-uganHcTZi1eUN_MfIBM&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=e8akw7bfqWPHoChgnDtEFw&_nc_ss=7b2a8&oh=00_AQP0ksXoICghtRzfyEx8TDU_Ta0116yIdgt3TjBQu5uCeQ&oe=6AC82C00" 
    },
    { 
        id: 2, 
        name: "Yama Gears Trail Jersey MTB", 
        category: "jersey", 
        type: "merch", 
        price: 1250, 
        specs: "Breathable Mesh, Quick-Dry, Japan Fabric", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/829196416_4595113317408948_5019474691743977221_n.jpg?stp=dst-jpg_tt6&cstp=mx1169x1461&ctp=s1169x1461&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wRGvRglE6uoQ7kNvwHJJx_g&_nc_oc=AdqDW_lTmrq7wAfuJqyvsyXCoOdktuCxSQoAGwau00n9cg4h0HosEUQ7LDgVq6q5Y74&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=9s7W_eYuin-74FuZwMa5Dg&_nc_ss=7b2a8&oh=00_AQNkKhENU0cyFkZeGaiMn95pQqIviKjZIUdrMkNYQqaPXg&oe=6AC82F2C" 
    },
    { 
        id: 3, 
        name: "Yama Gears Heavyweight Hoodie", 
        category: "hoodie", 
        type: "merch", 
        price: 1850, 
        specs: "100% Cotton, Embroidered Mountain Logo", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/830413333_4595226974064249_1518941561815945148_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dqiqOLGWEzYQ7kNvwE_TAvN&_nc_oc=AdqvdQ24F7FY5YVxb-eUwA3oh9n-KbaB_LYGRiLKweT4Np4hWR2q9sjDuSV13lDCRms&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=CgilqbQYuAId0WhiRQ0BuQ&_nc_ss=7b2a8&oh=00_AQPNrU1-FrHRHNTluKTtTKVjVF10zO912IlR_dwxiFKW1Q&oe=6AC827C5" 
    },
    { 
        id: 4, 
        name: "Yama Gears Heavyweight Hoodie", 
        category: "hoodie", 
        type: "merch", 
        price: 1850, 
        specs: "100% Cotton, Embroidered Mountain Logo", 
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/825279990_4595322457388034_4947922182353773167_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8Gk7SkZ6elMQ7kNvwE3ctBY&_nc_oc=AdrLV1GKNdIlmkKBzft2VTlIofm5c0ZL2ZWj4N3HwaFeZCJ59YjFBX8fv8PNxAuKR7g&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=58PYlJUxI5ZNiWDq9P9ycg&_nc_ss=7b2a8&oh=00_AQPKg-jIlypwC0dSv5UfHYdKSNvJBUbd8pwLblQZcPnt8A&oe=6AC83C7B" 
    },
    { 
        id: 5, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/506257497_24785111264411354_1768972767249315838_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7dd4DtW3lXQQ7kNvwGwAqED&_nc_oc=Adpiru1SO4rn5KfEpj34nS8Srnb2vVQhuYxjoC7xAMvE5LFV7PvznBBKZKYbTqkL1-0&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=EiNSqP1kRRroEi2nELmJ3w&_nc_ss=7b2a8&oh=00_AQO2TXJ0VHvMnhkJLKy9xOPj89HD0GRKPev-Mw9bIcqy-g&oe=6AC82249" 
    },
    { 
        id: 6, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/505544979_24785113144411166_6245770905526589712_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fbitTQbBACEQ7kNvwHnPeBO&_nc_oc=AdqKH_DY05D5H0PJCrOVnXs_2u8FS-CrOzK0h1gLxhicmYO8vDoiglbygmJah2poG80&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=iQYyfdsaJ8ByN9u5jL8OVg&_nc_ss=7b2a8&oh=00_AQM9fwJdf2kkJ2XJOJijT3-o_Y3x5ZEEwLiwtOm1zu77kg&oe=6AC81882" 
    },
    { 
        id: 7, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/829196692_4595228590730754_99512575118747408_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MkTfTxMX13AQ7kNvwEgO472&_nc_oc=AdpbB8Il7gqmsr1mC77NKd7MOEp-AWsmPJR4A3vZHslaw0MoaOmFc1eJObgeILAVRDw&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=APP791LPbIY1V-QE6Teydg&_nc_ss=7b2a8&oh=00_AQMfj_NiX17pGGt7ZVOMFd5Lu9moBhtG-cOeUT12TcaPSg&oe=6AC819A9" 
    },
    { 
        id: 8, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/829603726_4595324297387850_3842815601373458545_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8BbIkNZ_SvwQ7kNvwEQFW1O&_nc_oc=AdoTrMe8AUNgia-wsu1goP5NCq0ABCea4L_KYrEGn-Hx3JePooO1Buw-mLKIXndIMoE&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=dtkz50H7u6-1grzsGTgKww&_nc_ss=7b2a8&oh=00_AQPssrHWXXai0cV9uDL4a4aq1PAhiIpjmBa_885JQJerBA&oe=6AC8405B" 
    },
    { 
        id: 9, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/829196475_4595230730730540_2368457628400369438_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6vaP1Cg190UQ7kNvwEuChIW&_nc_oc=Adr8GeZ7vvKsClIy6vj06TxZ7np2HPaicT4eno5DWoUGBdzk40jlEaisnY3vu44EpVo&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=MiIhBsQT_f3llMtFFuxOqA&_nc_ss=7b2a8&oh=00_AQPsaG-VA-4Hxtttcr9gb4l3mHoi51KLfHUqDY_rq34RZQ&oe=6AC81255" 
    },
    { 
        id: 10, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/827282048_4595327407387539_214812346867746026_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1r72-fJlaPQQ7kNvwGmkHYQ&_nc_oc=Adq-FdSYjYKFieIZ-g6koMed4T3PYY45KNgFctAU8bQ8ez1uneJsnuTyEbPsORYVZSs&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=Eh7xj0FwsmhoaO-0WUa3Bw&_nc_ss=7b2a8&oh=00_AQPhUKHJFxiHxdd_QUtFuM6FQk2pg9uj5ksNQTDW4Kz6GA&oe=6AC81D0A" 
    },
    { 
        id: 11, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/508826344_24854078137514666_1146843166710111177_n.jpg?stp=dst-jpg_tt6&cstp=mx505x757&ctp=s505x757&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=m-_U-jpTJcoQ7kNvwEPr-zp&_nc_oc=AdrZyQfMhpUTfKz7lT5zona9ySjCTuBzMu2VU_d2hEcX_z9ZL6-9iOrJvcPVTHqKoak&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=26f3cKKxleYV-Y56EdxT1Q&_nc_ss=7b2a8&oh=00_AQOG6BBbEixyu6-b-KCGnJ0rF6falubXPIcNdX2v7lgnGg&oe=6AC81591" 
    },
    { 
        id: 12, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/509422884_24854078090848004_797114143126808645_n.jpg?stp=dst-jpg_tt6&cstp=mx505x759&ctp=s505x759&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-1b6gzusjP4Q7kNvwHyZ75w&_nc_oc=Adp-9zK4VrKPR6pWje6FZlfjYLUSEYV5tl9hmIHRLYB2MVz0r8PNZUoaTHc2tUdZP0o&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=H2H1cQzx_5OaviRDnUMq-Q&_nc_ss=7b2a8&oh=00_AQPUasz89RF2_XhnLPXlZ5-fh-BnU2SBnTg0Qbm_bL_zlA&oe=6AC82989" 
    },{ 
        id: 13, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/509427727_24854078427514637_7727181357129933045_n.jpg?stp=dst-jpg_tt6&cstp=mx506x755&ctp=s506x755&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KTSSNyzm4YcQ7kNvwFiYIgJ&_nc_oc=AdrwlY9T-pwP9nC2BvdSdCuLFOPxrgU6Eqa2N0Te3sfGAE5FRgfCDzxNUx2YWfeoWBI&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=Vuy93rGATbxtWnNry7ZVNw&_nc_ss=7b2a8&oh=00_AQPCZb0eVOJ0A7GL2zRde1FFXwNizCd01ohpKtB5Z_v79Q&oe=6AC811AC" 
    },{ 
        id: 14, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/510169964_24854078084181338_5144954769614833930_n.jpg?stp=dst-jpg_tt6&cstp=mx505x762&ctp=s505x762&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RsduVtd6lMYQ7kNvwGMEFCW&_nc_oc=AdrqafEiqrUq7f7QAHma7hMpOq8OThQsLBHuStxfhPJkVdlWIdG-k1kkSwRv8GjBreA&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=kGgLI371DVB6NLSgzMg8Qw&_nc_ss=7b2a8&oh=00_AQP3Wr1FOTUQGQ1nSsytoomR04BYKj_QTJF3XReB8NmmPw&oe=6AC80ED8" 
    },{ 
        id: 15, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/508610897_24854078094181337_3319065751272561834_n.jpg?stp=dst-jpg_tt6&cstp=mx1284x1004&ctp=s1284x1004&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HGOJFDvfrhsQ7kNvwHZbB6b&_nc_oc=Adp2LguVRJWbfHif3RkYApduokusRZT8XPTOhSJu63sgGa5399_K2bwtfqAgHh1KJiE&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=qpvv7HNus-XV3IquNQ8_XA&_nc_ss=7b2a8&oh=00_AQOf_9a-qofOg9sAHbGwSOMIews5g5cPUyCExQMCvix3yg&oe=6AC8172B" 
    },{ 
        id: 16, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/508763675_24854078077514672_3559294976561690073_n.jpg?stp=dst-jpg_tt6&cstp=mx556x837&ctp=s556x837&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YEDYlILyF_sQ7kNvwGyVe2u&_nc_oc=AdqQoSXuovMOTIQfP-x5AXkrbCmuUqetGfP0QHbcCZmuQhBxnfF-qnssLZsyCoGIf3U&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=iS1ojD0Bx73YeGcB3eAecw&_nc_ss=7b2a8&oh=00_AQMzMnnVbWbZxyl684QTn7cSJ-NCWGmhRFRz8s4Ec_MAcA&oe=6AC8202E" 
    },{ 
        id: 17, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/508674447_24854078070848006_7075197354736139205_n.jpg?stp=dst-jpg_tt6&cstp=mx506x759&ctp=s506x759&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hnmio1R9OloQ7kNvwFxEMfO&_nc_oc=Adr46hea_44OuY6opAtuojlhNR3UHhGMjyRRHZgFYqVyiK0FkymAA6hH5vOak-B23cE&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=jGB50Qxuq_ZZTZwl7U6oZQ&_nc_ss=7b2a8&oh=00_AQO6HG2YVH83ZM5Jbwdew7mjsmuM1sk4SvHrxV5stbYndg&oe=6AC82C41" 
    },{ 
        id: 18, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/509423941_24854078074181339_6310466954338422737_n.jpg?stp=dst-jpg_tt6&cstp=mx579x872&ctp=s579x872&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E1-kQmItrGAQ7kNvwFE2Ytk&_nc_oc=AdranSBkzE9hXeKn0R1G0JHZxmiWy7QDilYLF65XE7ghCC8_cCxe7d7_0w_4tohTcjA&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=U33LiknuO-w1x_F9PEg0Zw&_nc_ss=7b2a8&oh=00_AQPaqzdekJxnbuOXd8VRyvjtio4BY5-zC8sLEerW85SLow&oe=6AC82B87" 
    },{ 
        id: 19, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/510169964_24854078084181338_5144954769614833930_n.jpg?stp=dst-jpg_tt6&cstp=mx505x762&ctp=s505x762&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RsduVtd6lMYQ7kNvwGMEFCW&_nc_oc=AdrqafEiqrUq7f7QAHma7hMpOq8OThQsLBHuStxfhPJkVdlWIdG-k1kkSwRv8GjBreA&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=kGgLI371DVB6NLSgzMg8Qw&_nc_ss=7b2a8&oh=00_AQP3Wr1FOTUQGQ1nSsytoomR04BYKj_QTJF3XReB8NmmPw&oe=6AC80ED8" 
    },
    { 
        id: 20, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/508934861_24854078050848008_4407161644729323143_n.jpg?stp=dst-jpg_tt6&cstp=mx433x652&ctp=s433x652&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=puyKprrYmD4Q7kNvwGUga9H&_nc_oc=AdoUAK_zg48n1BqAGZNTRjJ6QEh55DIJHWZIvau9eyfNZWIkuApw6lMiTZ-9Q-1se6I&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=LkE0pT7gcjNfvH5Itk41_Q&_nc_ss=7b2a8&oh=00_AQOkv6O-NsevtE_WPvYvd6Us2_Uql-J0uzzBWot_l2p7Pg&oe=6AC824E3" 
    },
    { 
        id: 21, 
        name: "SMITH Mainline Helmet & Goggle Set", 
        category: "gears", 
        type: "merch", 
        price: 22500, 
        specs: "SMITH Mainline full-face helmet in Size Medium, comes with its original storage bag.", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/789556276_1408573508036066_2388865489487995374_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1287&ctp=s1320x1287&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-HMS1ndCQSkQ7kNvwFyjgR_&_nc_oc=AdoPbr8P-r9o9D9WI39GwIS_TRQ4u5H6yK4JhukPuBM5FYntl695ZMY5rehjPusdtwY&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=6Fmcxg_WDkp0s7BOE7bQHQ&_nc_ss=7b2a8&oh=00_AQPmLDdJetaoOeXc2219ir8bfDdDJBOrCuZX5ZD-FBK38Q&oe=6AC83C4E" 
    },
    { 
        id: 22, 
        name: "Fox Speedframe Pro Helmet", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "Adjustable visor, optimized ventilation ports, and extended coverage on the back of the head typical for trail and enduro riding.", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/776921798_1399767195583364_3714640825328763643_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5Z-LVXxcyGwQ7kNvwEHuK4b&_nc_oc=AdqZndE90__pppn-Tf-g5BeKBIw_rcjEXCa4egwEmBSafciMJDp7KX8OH9VBOXonGd4&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=EVMWOCIvMDf8WaUgDp1oLw&_nc_ss=7b2a8&oh=00_AQNM19BcOwQ7-vBVSs-khduM0xIK4ZgPZa-y8j-huerPaQ&oe=6AC83272" 
    },
    { 
        id: 23, 
        name: "Yeti Cycles / WTB", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "features Titanium or Chromoly rails", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/734958285_1358574483035969_7614654161818177267_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8pCcykCZitAQ7kNvwEjgAaV&_nc_oc=AdqyuGCsr2govU74KJ-qH3w1t1B9S310f574EqNDRUDZqP18AoqJ4tY6ubb0ktd_eiQ&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=IQaHRQfD1-Qqn_ZbIGbnRw&_nc_ss=7b2a8&oh=00_AQMkU86wz30OkWvMyBCjLlOxazxbDPzMsjCdz0qIpFpbSA&oe=6AC8371B" 
    },
    
    // SECONDARY PRODUCTS: MTB Parts & Complete Bikes
    { 
        id: 24, 
        name: "SRAM Code R hydraulic disc brake lever", 
        category: "parts", 
        type: "bikes", 
        price: 8500, 
        specs: "Imported Japan Stock, 4-Piston", 
        image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.99422-6/834019479_1125784076649493_6460814578824729600_n.png?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3loy99VjyjMQ7kNvwH-3C4E&_nc_oc=AdobmQOb4b_1qAvZvMwM6t_g43PPBbWYypNllb1CZVQC4fxIFIfkhnkms267waJk-dI&_nc_zt=14&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=rdf-fd5MfHKu93Sc8S0szQ&_nc_ss=7b2a8&oh=00_AQOxYYaFbmEtthIOi40sElUCAOKSdNQEP9jqlHkaJ8HLkA&oe=6AC8316D" 
    },
    { 
        id: 25, 
        name: "Rocky Mountain Altitude ALLOY", 
        category: "parts", 
        type: "bikes", 
        price: 58000, 
        specs: "Full Suspension Alloy Frame, Rear Shock Included, Boost 148 Spacing", 
        image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.99422-6/809026759_1627281539036659_8181719581260487738_n.png?stp=dst-jpg_tt6&cstp=mx1320x1271&ctp=s1320x1271&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4Q6YrrXviVEQ7kNvwHA8IOt&_nc_oc=AdrJvmGej6bPBdDUpg7OKYoM-tRcnKg2KXTkfQbtHyCgUGtqBqzH0HO0iy4H0soOZDM&_nc_zt=14&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=fIeZiVHO7NtLVUxxqWF3gg&_nc_ss=7b2a8&oh=00_AQPS03pQghXZa4dQIJzFQCPWzz7j0eCStUCFy0o-8O4Npw&oe=6AC830CF" 
    },
    { 
        id: 26, 
        name: "TRP TRAIL EVO 4P", 
        category: "parts", 
        type: "bikes", 
        price: 10500, 
        specs: "4-Piston Hydraulic Disc Brake Set, High-Flow Calipers, Ergonomic Levers", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/740225133_1363270212566396_8335312020196204227_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x967&ctp=s1320x967&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tTlSkEH3FJQQ7kNvwE4U04_&_nc_oc=AdrCr39ofBAGIkB5hmYA_Cjq04T4QF56Y5zPeB6NgtCJoJnBJTnk3TlXSztEY1nHPqA&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=9ziaFAAaSGnsAu1HTbxlmg&_nc_ss=7b2a8&oh=00_AQPVhOWZvT183VlYhfCUkAVrMp8NgEyelP4RRe4Tqv28bw&oe=6AC815A2" 
    },
    { 
        id: 27, 
        name: "Bold Linkin 150 Pro Carbon", 
        category: "bikes", 
        type: "bikes", 
        price: 138000, 
        specs: "SRAM 1x12 Speed, Öhlins Air Suspension, SRAM Code R Brakes, Medium", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.99422-6/833070993_958333400059490_254752121852407066_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=X3gwRIZwDLoQ7kNvwFVIhe4&_nc_oc=AdroknLx1V7N_znN31W6OaGUpoPGNfestRmddlcGYgDxKaLudexDTVa5Jhbs3vdsjbQ&_nc_zt=14&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=6sh6NCAHovKlU5j0_xgvOg&_nc_ss=7b2a8&oh=00_AQM3V3TWtbSeLnpS_d3NxU547t1WRhqOAoYaj0eJBSCSMg&oe=6AC8328E" 
    },
    { 
        id: 28, 
        name: "Trek Slash 8", 
        category: "bikes", 
        type: "bikes", 
        price: 200000, 
        specs: "Aggressive long-travel enduro bike built to conquer high-speed downhill trails and rough technical terrain.", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/827983611_1436173318609418_7532013344879865895_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j3cb1xO4f4YQ7kNvwHuFNt8&_nc_oc=AdpwD4Dg1AERisU4An_HcjTZ9Yib7B29G82z-mKYR2jAdwY1F1pYvJj4ywy1eTg0nFw&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=roiTl_ICYVYJfKS3ItJuXQ&_nc_ss=7b2a8&oh=00_AQMj_t3yvLWBlTgpZyw4bJdjQQKklbjGKCT5sC2nhCx1hw&oe=6AC82085" 
    },
    { 
        id: 29, 
        name: "Specialized Stumpjumper Evo alloy", 
        category: "bikes", 
        type: "bikes", 
        price: 250000, 
        specs: "Versatile all-mountain trail bike with adjustable geometry, engineered for smooth climbing and aggressive descents.", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/828840987_1434257382134345_6409450336292662284_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IFf3jPfD3poQ7kNvwFJ5snk&_nc_oc=AdqvlAYWo0AAJlbwFkiPinR7T2hM-ovR37-Ya6SSRpWvGbrVNtX18gxGU-J-34L-u_Q&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=ziOrjmfkdNQNEjX-AJBMSg&_nc_ss=7b2a8&oh=00_AQPnQ4Gapz5PKiNSRcbb61Y4jmLOiySKrDN_C0Q7lhU-YQ&oe=6AC83CD7" 
    },

];

let cart = JSON.parse(localStorage.getItem("yama_cart")) || [];

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();

    // Check if current page is products page
    const grid = document.getElementById("products-grid");
    if (grid) {
        // Read URL query parameters (e.g. ?category=jersey)
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get("category");

        if (categoryParam) {
            filterCategory(categoryParam);
        } else {
            renderProducts(products);
        }
    }
});

// Save cart to LocalStorage so items persist when navigating between pages
function saveCart() {
    localStorage.setItem("yama_cart", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerText = cart.length;
    }
}

// Render Product Cards with Proper HTML Image Tags
function renderProducts(items) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";

    items.forEach(product => {
        const priorityLabel = product.type === "merch" ? "PRIMARY: MERCH" : "SECONDARY: HARDWARE";
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <span class="priority-tag">${priorityLabel}</span>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=No+Image+Available';">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-specs">${product.specs}</p>
                <div class="product-price">₱${product.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</div>
                <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">ADD TO ORDER</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Categories
function filterCategory(cat) {
    const grid = document.getElementById("products-grid");
    if (!grid) {
        window.location.href = `products.html?category=${cat}`;
        return;
    }

    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(t => t.classList.remove("active"));

    if (cat === 'all') {
        renderProducts(products);
    } else if (cat === 'merch') {
        renderProducts(products.filter(p => p.type === 'merch'));
    } else if (cat === 'bikes') {
        renderProducts(products.filter(p => p.type === 'bikes'));
    } else {
        renderProducts(products.filter(p => p.category === cat));
    }
}

// Modal Toggle Functions
function openModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.style.display = "flex";
    }
}

function closeModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) {
        targetModal.style.display = "none";
    }
}

// Order Tracking Simulation
function processTracking() {
    const trackInput = document.getElementById("track-input");
    const resultBox = document.getElementById("tracking-result");

    if (!trackInput || !resultBox) return;

    const val = trackInput.value.trim();

    if (val === "") {
        alert("Please enter a valid Order Reference ID.");
        return;
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <strong>Order Status for Ref: ${val.toUpperCase()}</strong><br>
        <p><i class="fa-solid fa-ship"></i> Status: <strong>In Transit (Japan to Philippines)</strong></p>
        <p>Estimated Arrival: 3-5 Business Days</p>
        <p><small>Handled with reinforced protective packaging.</small></p>
    `;
}

function trackFromBanner() {
    const bannerInput = document.getElementById("banner-track-id");
    if (bannerInput && bannerInput.value.trim() !== "") {
        window.location.href = `track-order.html?id=${encodeURIComponent(bannerInput.value)}`;
    } else {
        window.location.href = "track-order.html";
    }
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
        cart.push(item);
        saveCart();

        // Optional: Pulse the cart badge as a subtle confirmation
        const badge = document.getElementById("cart-count");
        if (badge) {
            badge.classList.add("pulse");
            setTimeout(() => badge.classList.remove("pulse"), 500);
        }
    }
}

function openCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item) => {
            const cartItem = document.createElement("div");
            cartItem.className = "summary-line";
            cartItem.innerHTML = `
                <span>${item.name}</span>
                <span>₱${item.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</span>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    // Check currently selected payment method radio
    const activePayMethod = document.querySelector('input[name="paymethod"]:checked');
    const selectedMethod = activePayMethod ? activePayMethod.value : 'card';
    
    // Toggle form display & calculate totals
    togglePaymentForm(selectedMethod);

    openModal('cart-modal');
}

// Handles switching between Card, GCash, Maya, and Store Pickup forms
function togglePaymentForm(method) {
    // Hide all forms
    const forms = document.querySelectorAll('.payment-form-section');
    forms.forEach(form => form.style.display = 'none');

    // Show selected payment method form
    const targetForm = document.getElementById(`${method}-form`);
    if (targetForm) {
        targetForm.style.display = 'block';
    }

    // Calculate subtotal and shipping (Waive ₱250 shipping if Store Pickup)
    calculateCartTotals(method === 'store');
}

// Calculates cart subtotal, shipping fee, and grand total
function calculateCartTotals(isStorePickup = false) {
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price);

    // If cart has items and it's NOT store pickup, add 250 shipping
    const shippingFee = (cart.length > 0 && !isStorePickup) ? 250 : 0;
    const total = subtotal + shippingFee;

    const shippingEl = document.getElementById("cart-shipping");
    if (shippingEl) {
        shippingEl.innerText = `₱${shippingFee.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
    }

    const subtotalEl = document.getElementById("cart-subtotal");
    if (subtotalEl) {
        subtotalEl.innerText = `₱${subtotal.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
    }

    const totalEl = document.getElementById("cart-total");
    if (totalEl) {
        totalEl.innerText = `₱${total.toLocaleString('en-PH', {minimumFractionDigits: 2})}`;
    }
}

function processCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    const selectedMethod = document.querySelector('input[name="paymethod"]:checked')?.value || 'card';
    const methodNames = {
        card: "Credit/Debit Card",
        gcash: "GCash",
        maya: "Maya",
        store: "Store Pickup / Cash"
    };

    alert(`Order Request Processed via ${methodNames[selectedMethod]}!\nTracking ID: YG-` + Math.floor(1000 + Math.random() * 9000));
    cart = [];
    saveCart();
    closeModal('cart-modal');
}

function submitInquiry(e) {
    e.preventDefault();
    alert("Your inquiry has been submitted to Yama Gears staff.");
    e.target.reset();
}

function toggleInlineSearch() {
    const wrapper = document.getElementById('nav-search-wrapper');
    const input = document.getElementById('search-input');
    
    if (!wrapper.classList.contains('active')) {
        wrapper.classList.add('active');
        input.focus();
    } else {
        if (input.value.trim() !== "") {
            executeSearch();
        } else {
            wrapper.classList.remove('active');
        }
    }
}

function handleSearchKey(event) {
    if (event.key === 'Enter') {
        executeSearch();
    }
}

function executeSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
}

// Close search bar when clicking anywhere outside
document.addEventListener('click', function(e) {
    const wrapper = document.getElementById('nav-search-wrapper');
    if (wrapper && !wrapper.contains(e.target) && wrapper.classList.contains('active')) {
        if (document.getElementById('search-input').value.trim() === "") {
            wrapper.classList.remove('active');
        }
    }
});

function executeSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query !== '') {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
}

function handleSearchKey(event) {
    if (event.key === 'Enter') {
        executeSearch();
    }
}

/* ==========================================
   YAMA GEARS - ADD-ON TWO-STEP CHECKOUT
   added by; hugo
   ========================================== */

let ygCustomerDetails = {};

// Keep a reference to the existing checkout functions
const ygOriginalOpenCart = openCart;
const ygOriginalProcessCheckout = processCheckout;

// Step 1: Add the customer form without replacing the existing cart modal
function ygAddCheckoutForm() {
    const modal = document.getElementById("cart-modal");
    if (!modal || document.getElementById("yg-customer-step")) return;

    const modalContent = modal.querySelector(".modal-content");
    const cartLayout = modal.querySelector(".cart-layout");

    if (!modalContent || !cartLayout) return;

    const customerStep = document.createElement("section");
    customerStep.id = "yg-customer-step";
    customerStep.innerHTML = `
        <div class="yg-checkout-header">
            
            <p>Enter your contact and delivery details to continue.</p>
        </div>

        <form id="yg-customer-form">
            <h3>Contact Information</h3>

            <div class="yg-form-grid">
                <div class="yg-field yg-full">
                    <label for="yg-email">Email Address *</label>
                    <input id="yg-email" name="email" type="email"
                           autocomplete="email" required>
                </div>

                <div class="yg-field">
                    <label for="yg-first-name">First Name *</label>
                    <input id="yg-first-name" name="firstName"
                           autocomplete="given-name" required>
                </div>

                <div class="yg-field">
                    <label for="yg-last-name">Last Name *</label>
                    <input id="yg-last-name" name="lastName"
                           autocomplete="family-name" required>
                </div>

                <div class="yg-field yg-full">
                    <label for="yg-phone">Phone Number *</label>
                    <input id="yg-phone" name="phone" type="tel"
                           autocomplete="tel" required>
                </div>
            </div>

            <h3>Delivery Address</h3>

            <div class="yg-form-grid">
                <div class="yg-field yg-full">
                    <label for="yg-address">Street Address *</label>
                    <input id="yg-address" name="address"
                           autocomplete="street-address" required>
                </div>

                <div class="yg-field">
                    <label for="yg-city">City / Municipality *</label>
                    <input id="yg-city" name="city"
                           autocomplete="address-level2" required>
                </div>

                <div class="yg-field">
                    <label for="yg-region">Province / Region *</label>
                    <input id="yg-region" name="region"
                           autocomplete="address-level1" required>
                </div>

                <div class="yg-field yg-full">
                    <label for="yg-postal">Postal Code *</label>
                    <input id="yg-postal" name="postal"
                           autocomplete="postal-code" required>
                </div>
            </div>

            <div class="yg-checkout-actions">
                <button type="button" class="btn btn-secondary"
                        id="yg-back-to-cart">
                    Back to Cart
                </button>

                <button type="submit" class="btn btn-primary">
                    Continue to Order Summary
                </button>
            </div>
        </form>
    `;

    // Insert the customer form before the existing cart and payment area.
    modalContent.insertBefore(customerStep, cartLayout);

    document.getElementById("yg-customer-form").addEventListener(
        "submit",
        function(event) {
            event.preventDefault();

            if (cart.length === 0) {
                alert("Your cart is empty. Please add a product first.");
                return;
            }

            const formData = new FormData(this);
            ygCustomerDetails = Object.fromEntries(formData.entries());

            // Show the existing order summary and payment options.
            customerStep.style.display = "none";
            cartLayout.style.display = "grid";

            const summaryHeading = modalContent.querySelector(":scope > h2");
            if (summaryHeading) {
                summaryHeading.textContent = "Review Your Order";
            }

            // Show the customer details above the existing order summary.
            let detailsBox = document.getElementById("yg-saved-customer-details");

            if (!detailsBox) {
                detailsBox = document.createElement("div");
                detailsBox.id = "yg-saved-customer-details";
                cartLayout.parentNode.insertBefore(detailsBox, cartLayout);
            }

            detailsBox.innerHTML = `
                <h3>Delivery Details</h3>
                <p><strong>Name:</strong> ${ygEscape(
                    ygCustomerDetails.firstName + " " +
                    ygCustomerDetails.lastName
                )}</p>
                <p><strong>Email:</strong> ${ygEscape(ygCustomerDetails.email)}</p>
                <p><strong>Phone:</strong> ${ygEscape(ygCustomerDetails.phone)}</p>
                <p><strong>Address:</strong> ${ygEscape(
                    ygCustomerDetails.address + ", " +
                    ygCustomerDetails.city + ", " +
                    ygCustomerDetails.region + " " +
                    ygCustomerDetails.postal
                )}</p>

                <button type="button" class="btn btn-secondary"
                        id="yg-edit-customer">
                    Edit Details
                </button>
            `;

            document.getElementById("yg-edit-customer").onclick = function() {
                customerStep.style.display = "block";
                cartLayout.style.display = "none";
                detailsBox.style.display = "none";

                if (summaryHeading) {
                    summaryHeading.textContent =
                        "Your Shopping Cart & Order Checkout";
                }
            };

            // Refresh the existing cart display and totals.
            ygRenderExistingCart();
        }
    );

    document.getElementById("yg-back-to-cart").addEventListener("click", () => {
        customerStep.style.display = "none";
        cartLayout.style.display = "grid";

        const summaryHeading = modalContent.querySelector(":scope > h2");
        if (summaryHeading) {
            summaryHeading.textContent = "Your Shopping Cart & Order Checkout";
        }
    });
}

// Escape user-entered text before displaying it as HTML.
function ygEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// Refresh the existing cart items and total calculations.
function ygRenderExistingCart() {
    const container = document.getElementById("cart-items-container");
    if (!container) return;

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "summary-line";
            row.innerHTML = `
                <span>${ygEscape(item.name)}</span>
                <span>₱${Number(item.price).toLocaleString("en-PH", {
                    minimumFractionDigits: 2
                })}</span>
            `;
            container.appendChild(row);
        });
    }

    const selected = document.querySelector(
        'input[name="paymethod"]:checked'
    );

    togglePaymentForm(selected ? selected.value : "card");
}

// Add the customer form to the same modal when the cart is opened.
openCart = function() {
    ygAddCheckoutForm();

    const modal = document.getElementById("cart-modal");
    const customerStep = document.getElementById("yg-customer-step");
    const cartLayout = modal?.querySelector(".cart-layout");
    const detailsBox = document.getElementById("yg-saved-customer-details");
    const heading = modal?.querySelector(".modal-content > h2");

    if (cart.length === 0) {
        ygOriginalOpenCart();
        return;
    }

    if (customerStep) customerStep.style.display = "block";
    if (cartLayout) cartLayout.style.display = "none";
    if (detailsBox) detailsBox.style.display = "none";

    if (heading) heading.textContent = "Customer Information";

    ygOriginalOpenCart();
    openModal("cart-modal");

    // The original function opens the modal; show the form as step one.
    if (customerStep) customerStep.style.display = "block";
    if (cartLayout) cartLayout.style.display = "none";
};

// Preserve the existing payment-method selection and checkout simulation.
processCheckout = function() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    if (!ygCustomerDetails.email || !ygCustomerDetails.address) {
        alert("Please complete your contact and delivery information first.");
        const customerStep = document.getElementById("yg-customer-step");
        const cartLayout = document.querySelector("#cart-modal .cart-layout");

        if (customerStep) customerStep.style.display = "block";
        if (cartLayout) cartLayout.style.display = "none";
        return;
    }

    const method = document.querySelector(
        'input[name="paymethod"]:checked'
    )?.value || "card";

    const methodNames = {
        card: "Credit/Debit Card",
        gcash: "GCash",
        maya: "Maya",
        store: "Store Pickup / Cash"
    };

    // This is a prototype confirmation, not a real payment transaction.
    const trackingId = "YG-" + Math.floor(1000 + Math.random() * 9000);

    alert(
        "Order request recorded in this demo.\\n" +
        "Tracking ID: " + trackingId + "\\n" +
        "Payment method: " + methodNames[method] + "\\n\\n" +
        "No actual payment was processed."
    );

    cart = [];
    saveCart();
    ygCustomerDetails = {};

    closeModal("cart-modal");

    const customerStep = document.getElementById("yg-customer-step");
    const cartLayout = document.querySelector("#cart-modal .cart-layout");
    const detailsBox = document.getElementById("yg-saved-customer-details");
    const form = document.getElementById("yg-customer-form");

    if (customerStep) customerStep.style.display = "block";
    if (cartLayout) cartLayout.style.display = "grid";
    if (detailsBox) detailsBox.style.display = "none";
    if (form) form.reset();
};

// Add checkout styling without editing or replacing style.css rules.
(function ygAddCheckoutStyles() {
    if (document.getElementById("yg-checkout-added-styles")) return;

    const style = document.createElement("style");
    style.id = "yg-checkout-added-styles";
    style.textContent = `
        #yg-customer-step {
            padding: 20px 0;
        }

        #yg-customer-step h3,
        #yg-saved-customer-details h3 {
            margin: 22px 0 12px;
        }

        .yg-form-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        .yg-field {
            display: flex;
            flex-direction: column;
            gap: 6px;
            min-width: 0;
        }

        .yg-full {
            grid-column: 1 / -1;
        }

        .yg-field input {
            box-sizing: border-box;
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font: inherit;
        }

        .yg-checkout-actions {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 24px;
        }

        #yg-saved-customer-details {
            padding: 16px;
            margin: 16px 0;
            background: #f5f5f5;
            border-radius: 8px;
            overflow-wrap: anywhere;
        }

        #yg-saved-customer-details p {
            margin: 8px 0;
        }

        @media (max-width: 600px) {
            .yg-form-grid {
                grid-template-columns: 1fr;
            }

            .yg-full {
                grid-column: auto;
            }

            .yg-checkout-actions {
                flex-direction: column;
            }

            .yg-checkout-actions button {
                width: 100%;
            }
        }
    `;

    document.head.appendChild(style);
})();