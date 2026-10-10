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
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/789556276_1408573508036066_2388865489487995374_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1287&ctp=s1320x1287&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-HMS1ndCQSkQ7kNvwFyjgR_&_nc_oc=AdoPbr8P-r9o9D9WI39GwIS_TRQ4u5H6yK4JhukPuBM5FYntl695ZMY5rehjPusdtwY&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=6Fmcxg_WDkp0s7BOE7bQHQ&_nc_ss=7b2a8&oh=00_AQPmLDdJetaoOeXc2219ir8bfDdDJBOrCuZX5ZD-FBK38Q&oe=6AC83C4E" 
    },
    { 
        id: 22, 
        name: "Fox Speedframe Pro Helmet", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "Adjustable visor, optimized ventilation ports, and extended coverage on the back of the head typical for trail and enduro riding.", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/776921798_1399767195583364_3714640825328763643_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Wtr9RPpZU_0Q7kNvwEwdPPm&_nc_oc=Adpj_g-WUzCd2S2TZWpOyt7JmdvGNo3lB00TCULWxKRmUJ-4l7wpvzyKSVXovZqimL8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=nihZAjSHqyeHbeenUXURdA&_nc_ss=7b2a8&oh=00_AQOBB6G52JcIxOqbCEXwRZ871a-al23EVEjrwLuTfaCL2w&oe=6AD01B72" 
    },
    { 
        id: 23, 
        name: "Yeti Cycles / WTB", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "features Titanium or Chromoly rails", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/734958285_1358574483035969_7614654161818177267_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bth9qP-HvZ8Q7kNvwE6Hx3D&_nc_oc=Adrdl_pntZ1gnY6jkrL0WbyZsz8J05eQQiTZJIA7F-TTuUQNx7zfkDOGzlrgHsw-NjE&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=HleavuoQBfWgeLiAr0lOHw&_nc_ss=7b2a8&oh=00_AQM4uqDVFDa6RoBAgNyk_61QHx5hvnIFGCfWphw-4QcF1w&oe=6AD0201B" 
    },
    
    // SECONDARY PRODUCTS: MTB Parts & Complete Bikes
    { 
        id: 24, 
        name: "SRAM Code R hydraulic disc brake lever", 
        category: "parts", 
        type: "bikes", 
        price: 8500, 
        specs: "Imported Japan Stock, 4-Piston", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/740225133_1363270212566396_8335312020196204227_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x967&ctp=s1320x967&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TTHWU3qcM4wQ7kNvwFUoE2u&_nc_oc=AdrOQ91WzLePoBXkARwK0q2lW92vTRO-822kSIp27tC8NRqIWVUT91kVmLg-MUZFkKM&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=zfzwEeBfbD4ZP4oZIDwdjQ&_nc_ss=7b2a8&oh=00_AQP9Ni1WveYpp2L_YhH74vp7A89eVWm-bALRGTqhExGOHQ&oe=6AD036E2" 
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
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/827983611_1436173318609418_7532013344879865895_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0f83Byh2UuAQ7kNvwHSQzzd&_nc_oc=Adrm7nD3UGAWRQ9ejqj-wO-sv0lyY94Yz0SVFgnBhDg_mQZGfrDVrOxNRVAWsv4WFbo&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=WImhAU-rqGMj7pQ-79-3vQ&_nc_ss=7b2a8&oh=00_AQOkg84M7yPEMe4wwq_6CibDT-aFYH9359Q8yIlSLUqLHg&oe=6AD041C5" 
    },
    { 
        id: 28, 
        name: "Trek Slash 8", 
        category: "bikes", 
        type: "bikes", 
        price: 200000, 
        specs: "Aggressive long-travel enduro bike built to conquer high-speed downhill trails and rough technical terrain.", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.99422-6/833070993_958333400059490_254752121852407066_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DeBry_4TcjcQ7kNvwFHchQu&_nc_oc=AdqS2WZg-C7UppiO_ui-7zTq--fBRvzoTefGevIdNJSgHIzKa_UQfCiOUWV8F4QQ_Ds&_nc_zt=14&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=ywXQ07c9kW5jR5BCjsFG9w&_nc_ss=7b2a8&oh=00_AQP0O-3b9lsA_wdAJuvnhwM9FbDumk1B8wu0704zSzulvg&oe=6AD01B8E" 
    },
    { 
        id: 29, 
        name: "Specialized Stumpjumper Evo alloy", 
        category: "bikes", 
        type: "bikes", 
        price: 250000, 
        specs: "Versatile all-mountain trail bike with adjustable geometry, engineered for smooth climbing and aggressive descents.", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/828840987_1434257382134345_6409450336292662284_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8-h4aiTGlpQQ7kNvwFtzyYx&_nc_oc=Ado85vkgU0DWbS3FgCV5sQelKdMb8c1cyNNcllENYqvymv8dwlheyw71YupPnKE_yFE&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=Hg3oF252LRLTkgN0eIOgfg&_nc_ss=7b2a8&oh=00_AQM9-38CmGXck0g05Of_tN79OG1F2d9mJ3uEaUXELyTA6g&oe=6AD025D7" 
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