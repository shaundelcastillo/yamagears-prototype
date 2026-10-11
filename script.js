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
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/829196416_4595113317408948_5019474691743977221_n.jpg?stp=dst-jpg_tt6&cstp=mx1169x1461&ctp=s1169x1461&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V_Hia2MKaroQ7kNvwHxCwjt&_nc_oc=Adp8iOxWm1iZr9P0biuwh3CQWgdwZZ3kh1hdGHvfiLD2yPuthryPbTqDc0fPlmqM0yY&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=Te7PCJeeXwsoVCKV1uZUrA&_nc_ss=7b2a8&oh=00_AQOHUgaFgWaEuoQhRzDhbrYnwsdu301SnZSl4bKa_v48Kw&oe=6AD0182C" 
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
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/825279990_4595322457388034_4947922182353773167_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3dfd7HqlVnMQ7kNvwEIGAzn&_nc_oc=Adov7wnCzDn3YtclNf6NimObMSWAj_ZP4uNIWxP2Gyc_QVqrUJ5QAU6PiQGUdh5R_yw&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=q-dMtVXttx1J19-elF-Kew&_nc_ss=7b2a8&oh=00_AQO-wa2a8VI5ToQnOEFlEqRrWt9yTSxVnJA37V9V1bONgw&oe=6AD0257B" 
    },
    { 
        id: 5, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/505928789_24785112871077860_8686120211813223521_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=laWo8HCVQgMQ7kNvwGuiRrh&_nc_oc=AdrCVwgTsIaTIhZNqfn13WeSH7FutzvKxHaJAiXRAKtTqtjkexGZCGJApkRC7zo2RGs&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=jCQzM1ZLvg90DnK3fUDqZw&_nc_ss=7b2a8&oh=00_AQOn-GqW50kNpVrysESchXqkd9ifMT6BQbHaQyCU4fbBdw&oe=6AD01BD1" 
    },
    { 
        id: 6, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/505544979_24785113144411166_6245770905526589712_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E6t40F4NJPwQ7kNvwEKdKDK&_nc_oc=AdqCDH4lXTL_QoQvDMFiu1tYmhlq3VwLT6lmriGlQ09EV9GAcTQs96B70jHPQp2iYCQ&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=qTfGF8HjCj-aJmSTrc82zw&_nc_ss=7b2a8&oh=00_AQMRaKoesPRmQEKEi095g7_D-Kp9AUnDpEOY0ERH1FxcEQ&oe=6AD039C2" 
    },
    { 
        id: 7, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/829196692_4595228590730754_99512575118747408_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8WIo3iTlc2IQ7kNvwGbjW-x&_nc_oc=AdqtJLfdcnlMfuLYgvRugAusQr9jMx3mLY33wOYjErr7PNZKtAyxJO_zmhSqIxQMu00&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=HK4W4U9p6j2ScW6E2cuW9A&_nc_ss=7b2a8&oh=00_AQNBmCe3PchLtuhaK575lndkoPOzgm6ZLlFz33QrleZrXg&oe=6AD03AE9" 
    },
    { 
        id: 8, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/829603726_4595324297387850_3842815601373458545_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CVPMhxb17koQ7kNvwE92RBU&_nc_oc=AdrKaYJPj-0bcHHMY7m-ZXgFsII4D9_bagb4UkzAAcKmf2lyBcPf1vTyjwGdrVAzs1U&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=OYphGI7d8CwZmgKkeAlEOQ&_nc_ss=7b2a8&oh=00_AQPe2pEtxpBgNaPUrONjfjRC4-yScqo3wOIhDWaB8gYleg&oe=6AD0295B" 
    },
    { 
        id: 9, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/829196475_4595230730730540_2368457628400369438_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FK7rdswRMekQ7kNvwGsRp0I&_nc_oc=Adr3InIplO7epMyZJtMx9C5TFuGi6czqLfMLslfAn1o1IIBo80uE8SmGo51GKu8qQ8g&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=wn0WMn6L4i-bcyFvbpkXNg&_nc_ss=7b2a8&oh=00_AQMt5LF98yN0LLJGTMeB10IcoMvDmqyX9lkd3Xh_3oeV2w&oe=6AD03395" 
    },
    { 
        id: 10, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/827282048_4595327407387539_214812346867746026_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=e8tbvK_-qkwQ7kNvwHTAZve&_nc_oc=AdqBcKDbrk_qqG8_u_jlqAJ-VydRIUSLLYmPTnRhkTMMbBukGwFXZVB-N7uYnnfPvsE&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=_KOaMYKX7Ae70O1tGrH4dQ&_nc_ss=7b2a8&oh=00_AQPSxhyARa8lBkv409tunsh_ST6pNaFFF14zNcZSoKrIow&oe=6AD03E4A" 
    },
    { 
        id: 11, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/508934861_24854078050848008_4407161644729323143_n.jpg?stp=dst-jpg_tt6&cstp=mx433x652&ctp=s433x652&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eBIQDt2W7fQQ7kNvwFhCFqk&_nc_oc=Ado3qaxpZTzS--AjVNIfK4Lv-pz_1UcgJzli43qqT9Hc1xAYaLVF5sVrtnHlNtS90io&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=Tbu7ojvLYFMPhgHJWees4w&_nc_ss=7b2a8&oh=00_AQPqxhLo1SW9L5mMvr2GbEYVf6ImdvjvmR5w5Hsm5hqX2A&oe=6AD04623" 
    },
    { 
        id: 12, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/508842546_24854078300847983_6867426397070189918_n.jpg?stp=dst-jpg_tt6&cstp=mx382x575&ctp=s382x575&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j4WEa3BqjiEQ7kNvwEIj3oB&_nc_oc=AdpXPM5G5gd8hrFmeuTjW-0lvJN32pDgEUIRYZDb5-lSQzZHTAikaHCB1p6J-pW8OEg&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=Qz348RDw4JxvjnE9E3uciw&_nc_ss=7b2a8&oh=00_AQO-PdxG4wHq-x1v5RW2pZ83IquX5DF_XxW7R_Vh8mIqzw&oe=6AD01E6F" 
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
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/508826344_24854078137514666_1146843166710111177_n.jpg?stp=dst-jpg_tt6&cstp=mx505x757&ctp=s505x757&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t3lvRrPdtRQQ7kNvwHD6Jqm&_nc_oc=AdpG3p0Wu1EjGjfpYsuPbFgK8DzY7TMKiFcbMlXg2_YyzhjZLGmzdfgVmqhPD2n5k6E&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=Q181Z2rEF4CSLydbHomogQ&_nc_ss=7b2a8&oh=00_AQPWub5tcFB_80bCOGteKBsagThRczZWSgnxfmrnf_HAlg&oe=6AD036D1" 
    },{ 
        id: 15, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/509422884_24854078090848004_797114143126808645_n.jpg?stp=dst-jpg_tt6&cstp=mx505x759&ctp=s505x759&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l5HdbIYC6V8Q7kNvwGDYqQB&_nc_oc=AdpVx3EM33uQ9mMpparDKXApi9cgy3DiydUhEwV_7tUh60sBv9vngB1iJ1JVnIBiojs&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=Umea5NG35ETzmM9qCUazcQ&_nc_ss=7b2a8&oh=00_AQOhs4BfXqrDBvPQkB4P1xq3meOsmi4MTSadM_5nW_zfBQ&oe=6AD01289" 
    },{ 
        id: 16, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/508763675_24854078077514672_3559294976561690073_n.jpg?stp=dst-jpg_tt6&cstp=mx556x837&ctp=s556x837&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-nM-yrsjoy4Q7kNvwFGtqVp&_nc_oc=AdpT6VHUcBOTcIE4xyZO15WTNt6TaK6BSQglrUIb1z2tcfHEUVid1_XTIYdJ-x_xWek&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=OGTCaiDKD-4YAD1_1xYmlA&_nc_ss=7b2a8&oh=00_AQNIufqAszkkQ-LIE5T0XKTS8Db7cQw3wo9plT6P6NC1RA&oe=6AD0416E" 
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
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/509406862_24854078154181331_513385687667375717_n.jpg?stp=dst-jpg_tt6&cstp=mx578x874&ctp=s578x874&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XAkZL5PjdfUQ7kNvwE2uppX&_nc_oc=AdoqBIIPcL5dw4BevhW5BZKKpAkE_jhuBEdSZGJD0Wdrs7DUpsG0wxYKauMBqh425cw&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=7ZKjgYvha79ESCMvoaOzVg&_nc_ss=7b2a8&oh=00_AQPQa_EoTKxO6ljD3hRBoOm-JozRbXUyi9TsfNe3xfG1JA&oe=6AD038C4" 
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
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/786929310_1408573711369379_8198969178890679706_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1509&ctp=s1320x1509&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMrzfbs95b4gBKE_rCAqtbzcygtkbL3z7NzKC2RsvfPtLV8joGUEyOgg1xkO_dPtMQt0ziUD0bqmJs3N4gCny_&_nc_ohc=l4I-DLShCL4Q7kNvwHGwEwU&_nc_oc=AdrbAJqhbQzePU3ZjSTxXOsn1cPXOBbmmivUu11WubfvFoGxpR0Pb1Tv2yzQVNbypVI&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=-mG5dYR15p1fx5fg4BH43w&_nc_ss=7b2a8&oh=00_AQObmoFq0VRIovrUORrQOofHcTUOFX8AQuHzgTWskk1dDg&oe=6AD18632", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/789556276_1408573508036066_2388865489487995374_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1287&ctp=s1320x1287&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-mz7Zm0rRGyIti2whb9FQAUOTfH0rfpcBQ5N8fSt-lwumS_StQI92W7-f2QzVHcYLVLnibwMNtPifZ5fp06Bi&_nc_ohc=OGg2w-8UmNAQ7kNvwHAMWs9&_nc_oc=AdrPcMZukVxtqm3W4eIfO5I5MuGmUpG7EI5TP9W-TsGpl3TLbAwp_GFvAa9Wh8E3KOM&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=Ht2Hi-j61YPpXGejheDfLA&_nc_ss=7b2a8&oh=00_AQNwsrrhSCR-ahi9DkvJy4L35eIWR7bW5O2Vr8K31hR1Aw&oe=6AD176CE",
            "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/788853142_1408573594702724_8320019915377921264_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1165&ctp=s1320x1165&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG_OG1IYJONTI0b0TsuwGGEZSX24GZEijNlJfbgZkSKMzy_8wP7RAUFtbvaH65AOo2U54WvUCChlYYYigiivjYh&_nc_ohc=Lj6jEH_NPFYQ7kNvwFCONif&_nc_oc=AdqxPb1-wt0XeAejDwEQaSD2POxkknNQV-Ha12QUH0YXnRO3zrxzA4ZaFEsAdgMPhUw&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=52FlGvcxNIg5pCFiXd7NeQ&_nc_ss=7b2a8&oh=00_AQOuRwBdOr-jMsh3TEo_M2EyW6EDQrhT7zzAdd-vM3BrOw&oe=6AD182B0",
            "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/786929310_1408573711369379_8198969178890679706_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1509&ctp=s1320x1509&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMrzfbs95b4gBKE_rCAqtbzcygtkbL3z7NzKC2RsvfPtLV8joGUEyOgg1xkO_dPtMQt0ziUD0bqmJs3N4gCny_&_nc_ohc=l4I-DLShCL4Q7kNvwHGwEwU&_nc_oc=AdrbAJqhbQzePU3ZjSTxXOsn1cPXOBbmmivUu11WubfvFoGxpR0Pb1Tv2yzQVNbypVI&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=-mG5dYR15p1fx5fg4BH43w&_nc_ss=7b2a8&oh=00_AQObmoFq0VRIovrUORrQOofHcTUOFX8AQuHzgTWskk1dDg&oe=6AD18632"
        ]
    },
    { 
        id: 22, 
        name: "Fox Speedframe Pro Helmet", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "Adjustable visor, optimized ventilation ports, and extended coverage on the back of the head typical for trail and enduro riding.", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/778984984_1399767398916677_8518736991284655940_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEDA1kPVnELNCcr2-dlZEjWBjdtxbPPRZ0GN23Fs89FnRIsqtJRf19Rf_hKP_h105lZgkmTsQNNrxmOkEfxG3ZG&_nc_ohc=oNbOhYQgOBMQ7kNvwHNPx5T&_nc_oc=AdoAU62RfmhTRcuXCJJEFC0t8j7vFgDw_VLJE8SdAqYsHU3FTasQAGLZDLQ_lw7b2lM&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=BM1iyHBmMde9ZV2cROkMzg&_nc_ss=7a2a8&oh=00_AQNT6Ms2NceF3TrFD7_ZeMWhglsotaWFZaE1Zs5yfuk_zQ&oe=6AD19022", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/776921798_1399767195583364_3714640825328763643_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXErifJDWIyZyBYgIHekUCuOW3UgUiBqe45bdSBSIGp7t09QOQLCxW6mx2CGB5egm-dXZcB-ysrSR-poTUgkBY&_nc_ohc=AfNsUATYzmwQ7kNvwEn1EBx&_nc_oc=AdoUMIkJqRoACc-ib7bt1ceSUkQ5AhEAR9JZg3cVt3lSG7NSht0jcugmjUsd-4fin64&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=Pxokx4j2Iz0iOEyeApLY4w&_nc_ss=7a2a8&oh=00_AQOVpppPjar_IX_1kK19ti8bvvebF0aIKuTeLwIMg2pVdw&oe=6AD1A532",
            "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/778972386_1399767512249999_6953462688634124954_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEF7NdMwUvET88q15j5P5esGvFSM9zY7tka8VIz3Nju2U20NCmL4dFuXksFWoLCjq9ozTcOxyF7YllByE3PR7Ee&_nc_ohc=P50gsh_Rnb8Q7kNvwHxJ3kN&_nc_oc=AdrZn4f782lLlemOjCfqT84UlAg2-GTGQ02F-RSyIUzOVklj3yZA5WgWCAKOcRe1JlY&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=V6t3mTxFeMb9K1ObBXCx3w&_nc_ss=7a2a8&oh=00_AQNgrfavzqEb2L_JdkHCbMzQwDny1QDjlbYhZf5JCeG6lg&oe=6AD17485",
            "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/780727409_1399767408916676_3557508284038769899_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQIyZ5dQFqN5Og53gBZoo-id-aV42Ga2yJ35pXjYZrbHjtQp_pw_N019RiuDjPW_tT7LfWgWz8gbx7xPOyV0_8&_nc_ohc=snwtWEkVsgIQ7kNvwELEvNi&_nc_oc=Ado7pfIrRv0-NbuvW29_A32glpY2rJn1sCMAi0Owuoo3TUyMXHdiTdoxl1b-wTriSJo&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=stePTO_7SB3GUqcv3KuEHA&_nc_ss=7a2a8&oh=00_AQMgG738IAKD80l1epY4PICgM4P-Wo_zTM8K1WFgvXU8qw&oe=6AD188E7"
        ]
    },
    { 
        id: 23, 
        name: "Yeti Cycles / WTB", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "SMITH Mainline full-face helmet in Size Medium, comes with its original storage bag.", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/734958285_1358574483035969_7614654161818177267_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bth9qP-HvZ8Q7kNvwE6Hx3D&_nc_oc=Adrdl_pntZ1gnY6jkrL0WbyZsz8J05eQQiTZJIA7F-TTuUQNx7zfkDOGzlrgHsw-NjE&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=HleavuoQBfWgeLiAr0lOHw&_nc_ss=7b2a8&oh=00_AQM4uqDVFDa6RoBAgNyk_61QHx5hvnIFGCfWphw-4QcF1w&oe=6AD0201B", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/735001839_1358574419702642_7795496217284678172_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHh26xDqELIrBz0kXvkc2PjPPWxdSC8zl889bF1ILzOXxxOBWPWlG7ac9Mpy1-ajxDDKKOQLwsBnNJFG23dScId&_nc_ohc=uq93pSVo-_cQ7kNvwF_L5jM&_nc_oc=AdraWFd6d3biuoEW2khRqoX8HnD8WgvRy3dvl9m_KilLCk9TpC4a_KfkLJ9x_U8nm8s&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=OGGk81FbGcFChm10fiW92A&_nc_ss=7b2a8&oh=00_AQPQ7D2-0DHtF2-4b-cBcZ0EWLSiOw83CvQD_3AJJ6MC9A&oe=6AD179A1",
            "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/734974232_1358574356369315_2528872130990763197_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHw9PsZKqApKOxMcdBUaiHrENePh9quzwYQ14-H2q7PBvHhCW0w02xeyrbvprasMqYvUNIlH1ejsZmWmA73p-uT&_nc_ohc=77NMxb6PX9oQ7kNvwGSTu9e&_nc_oc=AdoZGPPtv57dAvnIFprT1nnnn9e6JMI1UmXkLtjvI9It-czQ4R5Fd6eGuf3MH4T9QQc&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=s1pZgvyxzlgEYVwB99eKtw&_nc_ss=7a2a8&oh=00_AQMdPkkzxmarrSLzbHHXFslUlfjeo7U9JGAbgp47rT-mrQ&oe=6AD1A7F6",
            "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/735981663_1358574479702636_6784783642338155834_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEcFArzly2Wng_1MzmL9ARU09R7vrhpoxXT1Hu-uGmjFYFwEyr9NY-4ZhOuIUjH3TrgWk-VRmQE6paBlvwo_De_&_nc_ohc=M_9zbb0KBGQQ7kNvwFrn67M&_nc_oc=AdpR_HKZG4B6rmgg3MwHeEgpTn83CSyW4800g5y_2uUtCcIDNJwRZtkMuLFXAzDG3Ew&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=IrCksYBGOHOIp2r1nSJxnA&_nc_ss=7b2a8&oh=00_AQOtVxEG2gdbn0i0I7XOPC-nihgHHwslLV7rmwBgE2JECA&oe=6AD19C38"
        ]
    },
    
    // //SECONDARY PRODUCTS: MTB Parts & Complete Bikes
    { 
        id: 24, 
        name: "SRAM Code R hydraulic disc brake lever", 
        category: "parts", 
        type: "bikes", 
        price: 8500, 
        specs: "Imported Japan Stock, 4-Piston.", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/740225133_1363270212566396_8335312020196204227_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x967&ctp=s1320x967&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TTHWU3qcM4wQ7kNvwFUoE2u&_nc_oc=AdrOQ91WzLePoBXkARwK0q2lW92vTRO-822kSIp27tC8NRqIWVUT91kVmLg-MUZFkKM&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=zfzwEeBfbD4ZP4oZIDwdjQ&_nc_ss=7b2a8&oh=00_AQP9Ni1WveYpp2L_YhH74vp7A89eVWm-bALRGTqhExGOHQ&oe=6AD036E2", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/740059818_1363270222566395_272232072798155806_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1522&ctp=s1320x1522&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFHQsHTLbqJZ-vMzFxoTX59g8B_LhGsy2SDwH8uEazLZB6ooSG5HT_Q4piNLicRC3P_058F7oECaZDDNaHXjIFv&_nc_ohc=tSYvA1jRv00Q7kNvwFTOhd_&_nc_oc=Adqk3zo7yy8zZhEgoy1xWFvIakM-5crRx54GM4gX9RnWZOj6AauOBQhdoztvztdHEh8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=SdG5tuWKc8d5PXMveW6XKg&_nc_ss=7a2a8&oh=00_AQMquSDoYlLDM7jnglvFvn1Lmi7UTEH8fYUkRWyLLYx1IQ&oe=6AD1A03B",
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/739276723_1363270232566394_8449518256546124341_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1369&ctp=s1320x1369&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHJTMSV9pw1r5uMSx6ozSzUjUSfdw4nQFaNRJ93DidAVgkauPb-M9o_9kxxE9-G_bG4Tc-rEcqJgeYepGI7a6C0&_nc_ohc=HWbkn95UjiIQ7kNvwFRenZU&_nc_oc=AdrS9c-WKSmWwThlez0jeErQhDo2pk9HkzWKcsVrRLFGaz2Q9XL6AxzO7ntZwM35TNg&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=JnAArxu_PYpUoXp_aUni7g&_nc_ss=7a2a8&oh=00_AQNhpw3tUIbDt60oc9K2jQYEkvs-Uiyt1Ew5C0hVB6acLA&oe=6AD1905F",
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/740225133_1363270212566396_8335312020196204227_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x967&ctp=s1320x967&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH-Skq6Cep8Y_jk2S9fncI9ObA-ijF1TJ05sD6KMXVMncMH6DhNDPWXgu80co6A4FvnWPuQifjaMqL_4F07xzck&_nc_ohc=TTHWU3qcM4wQ7kNvwFUoE2u&_nc_oc=AdrOQ91WzLePoBXkARwK0q2lW92vTRO-822kSIp27tC8NRqIWVUT91kVmLg-MUZFkKM&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=oLFyuVOaGdesEsLDL4600Q&_nc_ss=7a2a8&oh=00_AQOHDcVUyiD7h1XugD3XYCsVG0fjoHY1rOiRBGw26UBJZA&oe=6AD18862"
        ]
    },
    { 
        id: 25, 
        name: "Rocky Mountain Altitude ALLOY", 
        category: "parts", 
        type: "bikes", 
        price: 58000, 
        specs: "Full Suspension Alloy Frame, Rear Shock Included, Boost 148 Spacing", 
        image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.99422-6/809026759_1627281539036659_8181719581260487738_n.png?stp=dst-jpg_tt6&cstp=mx1320x1271&ctp=s1320x1271&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BkdNKxtMeE0Q7kNvwHOMQ0z&_nc_oc=AdryGCRbV2VGcYxwcKolo7Zf-j4w7qv3RWMQj4UUicdZRgrJg3Y21ZPiqapGfGIP6gw&_nc_zt=14&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=LNNAhLJeL-wZ-MmW-dOmtA&_nc_ss=7b2a8&oh=00_AQOhtIoF7ga1XV6l60Ey65QkjRsfrRXKTa_DSWqk7_GChA&oe=6AD019CF" 
    },
    { 
        id: 26, 
        name: "TR 11 Bro", 
        category: "parts", 
        type: "bikes", 
        price: 74000, 
        specs: "Transition Downhill Frame w/ headset", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.99422-6/840347541_969477445563159_4035901346005939105_n.png?stp=dst-jpg_tt6&cstp=mx1320x1146&ctp=s1320x1146&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEV6uz9bGg44rTQG5jsYNeoJ_v0KkrMEXQn-_QqSswRdK_JsUtvmUTfpJD4CzjYOP0pC6AHflvbbZufwZFl8Sj-&_nc_ohc=4oRMfoTI808Q7kNvwEW_mUV&_nc_oc=Adop_t3dVMqpjYdM-N8Cnq74zHxvXuw5tHlmGdBHB-9YbY0r3BA48pwCcWEYCqe9kWg&_nc_zt=14&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=kDO9-6jSrSimb-OBfJUjJw&_nc_ss=7b2a8&oh=00_AQNn2vStpAdKOxGlZNl4W7Khw8-mU_QCzREq1tSsC1kQjg&oe=6AD18E7D", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/840509282_1443661457860604_880041187439591169_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFI1L05EFHZnIhU7pRe6LB7Kg9CnrDf_x4qD0KesN__HoSRGzWWenOfizfCW1ZW4ctVL4PmDLVsGHYmDr0l2UbS&_nc_ohc=yNlj5PCu8doQ7kNvwFmrJpS&_nc_oc=AdrT8BSpao3wcsBlfDaxEwANdbJ2lc6LmTZARwk2K5Ncfq03O5fFW7J0rXb2fGG6AQU&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=kDO9-6jSrSimb-OBfJUjJw&_nc_ss=7b2a8&oh=00_AQOJYC4VULQxSebXQ1_38X90B9VJ2oPgK2vAYyZD7WazKg&oe=6AD18217",
            "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/839334677_1443661464527270_4951378264929930399_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCpzV6oKBONlKIHS6F7TS3uu-_oO18GAq677-g7XwYCnyJ347fYaH-Dn2ZrTVz9nm83IwPrcAir0ogNonvibBZ&_nc_ohc=bkQdgWl3LNMQ7kNvwH63twp&_nc_oc=AdpR14TLGTZZjYfip96LJ1HtXix2lnQ-T6Isydlw4UX7MTsfz148AJRmdQtD6ojM7P8&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=kDO9-6jSrSimb-OBfJUjJw&_nc_ss=7b2a8&oh=00_AQPP7QZxeFJj8JdUv-pYLzxAe2CUenTqv3l7UGS4Nbe-cA&oe=6AD1A6B3",
            "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/839663810_1443661504527266_3986266882844734932_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHwgiAFeEe8ykH4PqLwGinERqMr_A2EVrpGoyv8DYRWuluz123nedfH6hgA4Gwna69hpQ_WRIAPZW4B82lOf5zH&_nc_ohc=m0SQ6YrcKcgQ7kNvwEW9cwJ&_nc_oc=AdrRCwHcWXDdHvPGoKA44zJz2j-bigoq-hOV15TjBIqwwL0P_gZzgy8-e1DOJUznexs&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=kDO9-6jSrSimb-OBfJUjJw&_nc_ss=7b2a8&oh=00_AQNqiJtVF-E7yqgL_Pcr1Nh3kJduXC4RWTG48BtyylVC7w&oe=6AD191BA"
        ]
    },
    { 
        id: 27, 
        name: "Bold Linkin 150 Pro Carbon", 
        category: "bikes", 
        type: "bikes", 
        price: 138000, 
        specs: "SRAM 1x12 Speed, Öhlins Air Suspension, SRAM Code R Brakes, Medium", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/827983611_1436173318609418_7532013344879865895_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGHQoSGNntq6rf4i1uRG9RCjrwFIh3wCWaOvAUiHfAJZr-oEBAqYbpmzoLMEaskGGCKNKc3_Mu60k9S2yPnm6Q7&_nc_ohc=0f83Byh2UuAQ7kNvwHSQzzd&_nc_oc=Adrm7nD3UGAWRQ9ejqj-wO-sv0lyY94Yz0SVFgnBhDg_mQZGfrDVrOxNRVAWsv4WFbo&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=FRoofz5zgFAOukQlz4_yCA&_nc_ss=7b2a8&oh=00_AQNQS68yUMzFo1Rvp1kvwp1_Wle4G3iMAnndY76TJeXxSg&oe=6AD19345", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/828533192_1436173228609427_6409100510417840686_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFXBBvu9BnbgoHl0BfQv2kvoqqH5lu-RJqiqofmW75EmpVLLq5r6uycWbp1qq0x0eNwacqgBG70G1mxlbCtc23Z&_nc_ohc=RaGf1Zpr07UQ7kNvwHm87Gd&_nc_oc=AdreKmgk6FEsZC8AxP-XU02Ig2RIFJHnsCPeq-BF0vJSpO0JodTxJH5v6r75w5pVZDw&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=zNf9SEDYawQKJSDex-J04g&_nc_ss=7b2a8&oh=00_AQOEI-YNhpOCHlhGGngPPX3W36Pj7tqLfmHbk9lRzhP50A&oe=6AD17D57",
            "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/828678579_1436173261942757_281477616749244847_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1739&ctp=s1320x1739&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFaeNORKbbgbtBFvI4NtdFatV_cclj9mCS1X9xyWP2YJNBFAzJhL_QMgqpxU6Z5W3AZfOG6cqJBikgrLb45UYek&_nc_ohc=B19ovW3G6DQQ7kNvwGrBxzQ&_nc_oc=AdrO8d9xfYEtis43CZKK2GtMZ1YByD3nUB-up24UpHH6nwvaYP5uwB_g7jauM6QKDw4&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=8Eb_LKv3CD0e7BacyOSPXA&_nc_ss=7b2a8&oh=00_AQMdD1uvUV1a0ZexNUFGLV6_LYSnQyui0MBOOcxFESDllw&oe=6AD17702",
            "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/830117390_1436173341942749_7075821525546957202_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLcCcEoP4sFbjv7qP-jB4z0EV_cpzFkx3QRX9ynMWTHY7zgLaz6-tVQlUjsxrXj2S_YDj2K4S-8rWhkqLjTXHd&_nc_ohc=XqV7jmp32mkQ7kNvwGpnL5-&_nc_oc=Adpnlk_QSHJLXuo9YElMt7iObShKqrsUFWzK51bBcAvBeIHixZNnJzchFriSZH3MLrI&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=YnMaAgTbaQuuSWzMgYu0rA&_nc_ss=7b2a8&oh=00_AQN-gst6-zLlr4bRvyZstx79XOVg5UWWn-X3HFAWy2JB3A&oe=6AD18C44"
        ]
    },
    { 
        id: 28, 
        name: "Trek Slash 8", 
        category: "bikes", 
        type: "bikes", 
        price: 200000, 
        specs: "Aggressive long-travel enduro bike built to conquer high-speed downhill trails and rough technical terrain.", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.99422-6/833070993_958333400059490_254752121852407066_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DeBry_4TcjcQ7kNvwFHchQu&_nc_oc=AdqS2WZg-C7UppiO_ui-7zTq--fBRvzoTefGevIdNJSgHIzKa_UQfCiOUWV8F4QQ_Ds&_nc_zt=14&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=ywXQ07c9kW5jR5BCjsFG9w&_nc_ss=7b2a8&oh=00_AQP0O-3b9lsA_wdAJuvnhwM9FbDumk1B8wu0704zSzulvg&oe=6AD01B8E", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.99422-6/833165211_1098463942774075_4209964766860182223_n.png?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUP9p5b6tdShLHsdBIGLwkx-8HjPfo3UDH7weM9-jdQNjUl6qhwEPRKj2AXoNZD-xptvWxwdAsPyYgpyjDSuUw&_nc_ohc=tCE0R9xhpOwQ7kNvwGJn6EH&_nc_oc=AdoZi7AlEi9rzlywPxotWgk6VLPSex5iXOaNqVmYVxpxNh2ESHMHzaht061eQ0viM8s&_nc_zt=14&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=5JF6bJVHQ4MKfy_8DvNMTA&_nc_ss=7b2a8&oh=00_AQOnrH5M5U7EYpALNNURsmY3CZC74iY-Ltj3RyweV0v-hQ&oe=6AD1A789",
            "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.99422-6/836703917_2120867565972350_262524251432095328_n.png?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHoksAQKSa6dyKo0yDRQ5YYjjbJ-yHGl62ONsn7IcaXrdGqgCurQpO6bStAatwBZAblhl892rq2ivbNPtkhqUn6&_nc_ohc=lBoA6tLL7X8Q7kNvwHYvh2K&_nc_oc=AdrgvKhljICUo9uzgv99NzlfgJx4DHVon2HX7wAO47auOnVPCzhOlISwR82J7MaUAPI&_nc_zt=14&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=EtMyATZmGD7mwKiB1pJRYA&_nc_ss=7b2a8&oh=00_AQObbNEZ828cZtwW8Vv9BnOXu3b3W2uXePGPCPK7iCYJ-Q&oe=6AD1A9A0",
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.99422-6/833864491_1413330194225198_6760686827992109331_n.png?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGv9MLuqBZa5JFN1lDKjKQPIi3t_87BsGciLe3_zsGwZ15HFyaR-Qmk7_VUrtI1I0ZPyiHI2dusEj1V_85la6iF&_nc_ohc=NqntqXjl73IQ7kNvwHkYx2F&_nc_oc=Adq8gKA62NMvKjWYRhWC2OzqvGDGSU1xJUYEyqzFpEtqzglkT1iKN7ey4JOdaGSmA54&_nc_zt=14&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=s77KT8OVqVAmSnFIgl1rYA&_nc_ss=7b2a8&oh=00_AQO2Hzu5s49arC9FHCt3DBIgSlS7OWxTbmQX1WZ_ZrvFCQ&oe=6AD1AB75"
        ]
    },
    { 
        id: 29, 
        name: "Specialized Stumpjumper Evo alloy", 
        category: "bikes", 
        type: "bikes", 
        price: 250000, 
        specs: "Versatile all-mountain trail bike with adjustable geometry, engineered for smooth climbing and aggressive descents.", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/828840987_1434257382134345_6409450336292662284_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8-h4aiTGlpQQ7kNvwFtzyYx&_nc_oc=Ado85vkgU0DWbS3FgCV5sQelKdMb8c1cyNNcllENYqvymv8dwlheyw71YupPnKE_yFE&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=Hg3oF252LRLTkgN0eIOgfg&_nc_ss=7b2a8&oh=00_AQM9-38CmGXck0g05Of_tN79OG1F2d9mJ3uEaUXELyTA6g&oe=6AD025D7", 
        // Add 3 helmet angle URLs here:
        images: [
            "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/825279840_1434257472134336_7360753120697001448_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEwSaDVjSIgBrJbr1qYh7BMKTSr2a-LDK0pNKvZr4sMrfvv30OzoSwnWqqKMJM-9Qe2WPUnA7X3iNHia953OtBt&_nc_ohc=hfaYY_CrbZIQ7kNvwFHkmvN&_nc_oc=AdpIefbqMuf7q1hqJ-AKYyiHWKy7qzyA_B_YsYqAUsli4k-TL4IRL2epWlOEoHesX00&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=q-mk_t_piRKWDz3bYaEzEg&_nc_ss=7b2a8&oh=00_AQMehhRvW5BmMIevVHSBUwHeD6sHbRA3_Ss5cHJh9sACkg&oe=6AD1A702",
            "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/825279179_1434257422134341_1800602823152441057_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9EbUGFR9dGIgPjqp4Cz4Cc-nTmkrvw79z6dOaSu_Dv_zsHGQ4145w4ZsNMw_Pq_bneIBQa_suejgerEimuV1B&_nc_ohc=nItz4wCczMUQ7kNvwFiRXSN&_nc_oc=AdpumJIBi_S1kIPZ2JZste5C4PLlUgFNwWkzcFdi5oHbCPRVws_9m9bKgUcE2HsOe48&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=AHFI7j2C5xoNFNVDHJhSIA&_nc_ss=7b2a8&oh=00_AQOpxF6bHVvvMNPKdLbTCoBlRKQ3kHohn8-LviRzo_9V3Q&oe=6AD1A3BC",
            "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/825279739_1434257482134335_6410602212951550676_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFxyw7dqLKj33TkXYcO6IXGiOO4HFP37R2I47gcU_ftHQ6Wjfdqatfv_CRAeygT4JT8c50quNivtxln-VOC6efB&_nc_ohc=6L0v18JcEt0Q7kNvwH-dZgZ&_nc_oc=AdoZFVdmCwLjS66_x2jTSCqEoiKwITdrWJcUo8Ff5aaAoRcI52uWRYN4uX5K47Kgkj8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=cg0Z4PtDHHg73Y2sHIoGmA&_nc_ss=7b2a8&oh=00_AQNQSrkVNg_dKGQIQfQQ4Rnpfg75j4gHISDGMzQDStrUIA&oe=6AD1A035"
        ]
    },
];

let cart = JSON.parse(localStorage.getItem("yama_cart")) || [];
let ygCustomerDetails = {};

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();

    const grid = document.getElementById("products-grid");
    if (grid) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get("category");

        if (categoryParam) {
            filterCategory(categoryParam);
        } else {
            renderProducts(products);
        }
    }
});

// Save cart to LocalStorage
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

// Render Product Cards
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
            <div class="product-image" style="cursor: pointer;" onclick="openQuickView(${product.id})">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=No+Image+Available';">
            </div>
            <div class="product-info">
                <h3 class="product-title" style="cursor: pointer;" onclick="openQuickView(${product.id})">${product.name}</h3>
                <p class="product-specs">${product.specs}</p>
                <div class="product-price">₱${product.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}</div>
                <button class="btn btn-primary btn-block" onclick="addToCart(${product.id})">ADD TO ORDER</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const images = (product.images && product.images.length > 0) 
        ? product.images.slice(0, 3) 
        : [product.image, product.image, product.image];

    const modalBody = document.getElementById('quick-view-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 90px 1fr 1fr; gap: 25px; align-items: start;">
            <!-- Left: 3 Vertical Thumbnails -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${images.map((img, idx) => `
                    <img src="${img}" class="qv-thumb ${idx === 0 ? 'active' : ''}" style="width: 80px; height: 80px; object-fit: cover; cursor: pointer; border-radius: 6px; border: 2px solid ${idx === 0 ? '#000' : '#ddd'};" onclick="switchQvImage('${img}', this)">
                `).join('')}
            </div>

            <!-- Middle: Main Active Image Preview -->
            <div>
                <img src="${images[0]}" id="qv-active-img" alt="${product.name}" style="width: 100%; height: 380px; object-fit: cover; border-radius: 8px; border: 1px solid #e1e1e1;">
            </div>

            <!-- Right: Details, Quantity, Add to Cart & Specs -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <h2 style="font-size: 22px; font-weight: 800; margin: 0; color: #111; text-transform: uppercase;">${product.name}</h2>
                <div style="font-size: 13px; color: #f39c12;">⭐⭐⭐⭐⭐ <span style="color: #888;">0 Reviews</span></div>
                
                <div style="display: flex; align-items: center; gap: 12px; margin-top: 4px;">
                    <span style="font-size: 12px; font-weight: 700; text-transform: uppercase;">Quantity</span>
                    <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 4px;">
                        <button type="button" onclick="adjustQvQty(-1)" style="background: none; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold;">-</button>
                        <input type="text" id="qv-qty-input" value="1" style="width: 35px; text-align: center; border: none; font-weight: bold;" readonly>
                        <button type="button" onclick="adjustQvQty(1)" style="background: none; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold;">+</button>
                    </div>
                </div>

                <div style="font-size: 20px; font-weight: bold; color: #111; margin-top: 2px;">
                    ₱${product.price.toLocaleString('en-PH', {minimumFractionDigits: 2})}
                </div>
                
                <div style="font-size: 12px; color: #28a745; display: flex; align-items: center; gap: 6px;">
                    <i class="fa-solid fa-truck"></i> Inventory on the way
                </div>

                <button class="btn btn-primary" style="background: #f39c12; color: #fff; padding: 12px; font-weight: bold; border: none; border-radius: 6px; cursor: pointer; text-transform: uppercase; font-size: 14px;" onclick="addQvToCart(${product.id})">
                    Add to Cart
                </button>

                <div style="font-size: 12px; color: #555; line-height: 1.5; background: #fafafa; border: 1px solid #eee; padding: 12px; border-radius: 6px; max-height: 140px; overflow-y: auto; margin-top: 5px;">
                    <strong>SPECIFICATIONS:</strong><br>
                    ${product.specs}
                </div>
            </div>
        </div>
    `;

    openModal('quick-view-modal');
}

function switchQvImage(imgSrc, thumbElement) {
    document.getElementById('qv-active-img').src = imgSrc;
    document.querySelectorAll('.qv-thumb').forEach(t => {
        t.style.borderColor = '#ddd';
        t.classList.remove('active');
    });
    thumbElement.style.borderColor = '#000';
    thumbElement.classList.add('active');
}

function adjustQvQty(change) {
    const input = document.getElementById('qv-qty-input');
    if (!input) return;
    let qty = parseInt(input.value) + change;
    if (qty < 1) qty = 1;
    input.value = qty;
}

function addQvToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById('qv-qty-input');
    const quantity = qtyInput ? parseInt(qtyInput.value) : 1;

    if (product) {
        for (let i = 0; i < quantity; i++) {
            cart.push(product);
        }
        saveCart();
        showToast("Added to Cart", `${quantity} x ${product.name} added to your order.`);
        closeModal('quick-view-modal');
    }
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

        const badge = document.getElementById("cart-count");
        if (badge) {
            badge.classList.add("pulse");
            setTimeout(() => badge.classList.remove("pulse"), 500);
        }
    }
}

// Open Cart & Two-Step Checkout Function
function openCart() {
    ygAddCheckoutForm();

    const modal = document.getElementById("cart-modal");
    const customerStep = document.getElementById("yg-customer-step");
    const cartLayout = modal?.querySelector(".cart-layout");
    const detailsBox = document.getElementById("yg-saved-customer-details");
    const heading = modal?.querySelector(".modal-content > h2");

    if (cart.length === 0) {
        ygRenderExistingCart();
        openModal("cart-modal");
        return;
    }

    if (heading) heading.textContent = "Customer Information";

    openModal("cart-modal");

    if (customerStep) customerStep.style.display = "block";
    if (cartLayout) cartLayout.style.display = "none";
    if (detailsBox) detailsBox.style.display = "none";
}

// Handles switching between Card, GCash, Maya, and Store Pickup forms
function togglePaymentForm(method) {
    const forms = document.querySelectorAll('.payment-form-section');
    forms.forEach(form => form.style.display = 'none');

    const targetForm = document.getElementById(`${method}-form`);
    if (targetForm) {
        targetForm.style.display = 'block';
    }

    calculateCartTotals(method === 'store');
}

// Calculates cart subtotal, shipping fee, and grand total
function calculateCartTotals(isStorePickup = false) {
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price);

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

// Custom Toast Notification Helper Function
function showToast(title, message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notification";
        toast.className = "toast-notification";
        toast.innerHTML = `
            <i class="fa-solid fa-circle-check toast-icon"></i>
            <div class="toast-message">
                <h4 id="toast-title"></h4>
                <p id="toast-desc"></p>
            </div>
        `;
        document.body.appendChild(toast);
    }

    document.getElementById("toast-title").innerText = title;
    document.getElementById("toast-desc").innerText = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

// Process Checkout with Custom Toast Notification
function processCheckout() {
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

    const method = document.querySelector('input[name="paymethod"]:checked')?.value || "card";

    const methodNames = {
        card: "Credit/Debit Card",
        gcash: "GCash",
        maya: "Maya",
        store: "Store Pickup / Cash"
    };

    const trackingId = "YG-" + Math.floor(1000 + Math.random() * 9000);

    showToast("Order Placed Successfully!", `Processed via ${methodNames[method]}. Tracking ID: ${trackingId}`);

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
    if (query !== '') {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
}

document.addEventListener('click', function(e) {
    const wrapper = document.getElementById('nav-search-wrapper');
    if (wrapper && !wrapper.contains(e.target) && wrapper.classList.contains('active')) {
        if (document.getElementById('search-input').value.trim() === "") {
            wrapper.classList.remove('active');
        }
    }
});

/* ==========================================
   YAMA GEARS - ADD-ON TWO-STEP CHECKOUT
   ========================================== */

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
                    <input id="yg-email" name="email" type="email" autocomplete="email" required>
                </div>

                <div class="yg-field">
                    <label for="yg-first-name">First Name *</label>
                    <input id="yg-first-name" name="firstName" autocomplete="given-name" required>
                </div>

                <div class="yg-field">
                    <label for="yg-last-name">Last Name *</label>
                    <input id="yg-last-name" name="lastName" autocomplete="family-name" required>
                </div>

                <div class="yg-field yg-full">
                    <label for="yg-phone">Phone Number *</label>
                    <input id="yg-phone" name="phone" type="tel" autocomplete="tel" required>
                </div>
            </div>

            <h3>Delivery Address</h3>

            <div class="yg-form-grid">
                <div class="yg-field yg-full">
                    <label for="yg-address">Street Address *</label>
                    <input id="yg-address" name="address" autocomplete="street-address" required>
                </div>

                <div class="yg-field">
                    <label for="yg-city">City / Municipality *</label>
                    <input id="yg-city" name="city" autocomplete="address-level2" required>
                </div>

                <div class="yg-field">
                    <label for="yg-region">Province / Region *</label>
                    <input id="yg-region" name="region" autocomplete="address-level1" required>
                </div>

                <div class="yg-field yg-full">
                    <label for="yg-postal">Postal Code *</label>
                    <input id="yg-postal" name="postal" autocomplete="postal-code" required>
                </div>
            </div>

            <div class="yg-checkout-actions">
                <button type="button" class="btn btn-secondary" id="yg-back-to-cart">
                    Back to Cart
                </button>
                <button type="submit" class="btn btn-primary">
                    Continue to Order Summary
                </button>
            </div>
        </form>
    `;

    modalContent.insertBefore(customerStep, cartLayout);

    document.getElementById("yg-customer-form").addEventListener("submit", function(event) {
        event.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty. Please add a product first.");
            return;
        }

        const formData = new FormData(this);
        ygCustomerDetails = Object.fromEntries(formData.entries());

        customerStep.style.display = "none";
        cartLayout.style.display = "grid";

        const summaryHeading = modalContent.querySelector(":scope > h2");
        if (summaryHeading) {
            summaryHeading.textContent = "Review Your Order";
        }

        let detailsBox = document.getElementById("yg-saved-customer-details");

        if (!detailsBox) {
            detailsBox = document.createElement("div");
            detailsBox.id = "yg-saved-customer-details";
            cartLayout.parentNode.insertBefore(detailsBox, cartLayout);
        }

        detailsBox.innerHTML = `
            <h3>Delivery Details</h3>
            <p><strong>Name:</strong> ${ygEscape(ygCustomerDetails.firstName + " " + ygCustomerDetails.lastName)}</p>
            <p><strong>Email:</strong> ${ygEscape(ygCustomerDetails.email)}</p>
            <p><strong>Phone:</strong> ${ygEscape(ygCustomerDetails.phone)}</p>
            <p><strong>Address:</strong> ${ygEscape(ygCustomerDetails.address + ", " + ygCustomerDetails.city + ", " + ygCustomerDetails.region + " " + ygCustomerDetails.postal)}</p>

            <button type="button" class="btn btn-secondary" id="yg-edit-customer">
                Edit Details
            </button>
        `;

        document.getElementById("yg-edit-customer").onclick = function() {
            customerStep.style.display = "block";
            cartLayout.style.display = "none";
            detailsBox.style.display = "none";

            if (summaryHeading) {
                summaryHeading.textContent = "Customer Information";
            }
        };

        ygRenderExistingCart();
    });

    document.getElementById("yg-back-to-cart").addEventListener("click", () => {
        customerStep.style.display = "none";
        cartLayout.style.display = "grid";

        const summaryHeading = modalContent.querySelector(":scope > h2");
        if (summaryHeading) {
            summaryHeading.textContent = "Your Shopping Cart & Order Checkout";
        }
    });
}

function ygEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

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
                <span>₱${Number(item.price).toLocaleString("en-PH", { minimumFractionDigits: 2 })}</span>
            `;
            container.appendChild(row);
        });
    }

    const selected = document.querySelector('input[name="paymethod"]:checked');
    togglePaymentForm(selected ? selected.value : "card");
}

(function ygAddCheckoutStyles() {
    if (document.getElementById("yg-checkout-added-styles")) return;

    const style = document.createElement("style");
    style.id = "yg-checkout-added-styles";
    style.textContent = `
        #yg-customer-step { padding: 20px 0; }
        #yg-customer-step h3, #yg-saved-customer-details h3 { margin: 22px 0 12px; }
        .yg-form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .yg-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
        .yg-full { grid-column: 1 / -1; }
        .yg-field input { box-sizing: border-box; width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; font: inherit; }
        .yg-checkout-actions { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
        #yg-saved-customer-details { padding: 16px; margin: 16px 0; background: #f5f5f5; border-radius: 8px; overflow-wrap: anywhere; }
        #yg-saved-customer-details p { margin: 8px 0; }

        /* Toast Notification Styles */
        .toast-notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #fff;
            color: #111;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 14px;
            z-index: 99999;
            transform: translateY(120px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            border-left: 5px solid #28a745;
        }

        .toast-notification.show {
            transform: translateY(0);
            opacity: 1;
        }

        .toast-icon {
            font-size: 24px;
            color: #28a745;
        }

        .toast-message h4 {
            margin: 0 0 4px 0;
            font-size: 15px;
            font-weight: 700;
        }

        .toast-message p {
            margin: 0;
            font-size: 13px;
            color: #666;
        }

        @media (max-width: 600px) {
            .yg-form-grid { grid-template-columns: 1fr; }
            .yg-full { grid-column: auto; }
            .yg-checkout-actions { flex-direction: column; }
            .yg-checkout-actions button { width: 100%; }
        }
    `;
    document.head.appendChild(style);
})();