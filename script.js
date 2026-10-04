const products = [
    // PRIMARY PRODUCTS: Apparel & Merchandise
    { 
        id: 1, 
        name: "Yama Gears Trail Jersey MTB", 
        category: "jersey", 
        type: "merch", 
        price: 1250, 
        specs: "Breathable Mesh, Quick-Dry, Japan Fabric", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/474109818_10040388159310241_2137057276779076982_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x1500&ctp=s1200x1500&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaZDMuuSeCYAKC5-kIFCHXfaC38S57zZp9oLfxLnvNmuNnTiYqVojiGKkqjCmnL1ey9U4F-bgU4tIIRAZsC_2G&_nc_ohc=XjOTYgkhF1gQ7kNvwHSHTBl&_nc_oc=Adre9NbpGmk5gwJyvcuK81c5xfrPfq0BZNvl5hjsa3MXjs2byyLY3uuPSg7mbkPCv3o&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=KxFKt1bNpO82q0phVMUivw&_nc_ss=7b2a8&oh=00_AQPKQ_wJkF0LOWLsyS0xknYTH_sQh0gbHTXLH0st6KSEjA&oe=6AC19480" 
    },
    { 
        id: 2, 
        name: "Yama Gears Trail Jersey MTB", 
        category: "jersey", 
        type: "merch", 
        price: 1250, 
        specs: "Breathable Mesh, Quick-Dry, Japan Fabric", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/829196416_4595113317408948_5019474691743977221_n.jpg?stp=dst-jpg_tt6&cstp=mx1169x1461&ctp=s1169x1461&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFdm_-QowJVDZWXZQe_9rNGm2MYdqoYLS-bYxh2qhgtL7OHzlqWEc0xBG-YGGaaxr39Q0x0i3KH7E85GBzLqse8&_nc_ohc=bfGSdVrqd9cQ7kNvwFo3luv&_nc_oc=Adob9RpvZ-LDXtFeULnBF3hvEfKir9KyoXTuK3KCHDg9SqlMFZLDP6LnwbkIaLuwzHI&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=DZEquAkyudcTTD9r22XQeA&_nc_ss=7b2a8&oh=00_AQOAzyeyVV0UZGuOSua7_nk9HNldP3NNejK5M6R_dO_tIw&oe=6AC197AC" 
    },
    { 
        id: 3, 
        name: "Yama Gears Heavyweight Hoodie", 
        category: "hoodie", 
        type: "merch", 
        price: 1850, 
        specs: "100% Cotton, Embroidered Mountain Logo", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/830413333_4595226974064249_1518941561815945148_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFA120vNTEqT3ZQ9LO7EVyDhwXkTcLDiP2HBeRNwsOI_WNiBgpbduxp2jsHMZdD_f20Q8J5LiJDmcxWBhPRM6ue&_nc_ohc=OKSipdolDlwQ7kNvwHkXbwq&_nc_oc=Adr_rhuAJux2bizoXn0pRG_6yNpajpn_pFRabVliPAO_X6nVtNUaE7sFFjxqJvi5Mow&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=_afSRLjRn7f68g6YNhVxpQ&_nc_ss=7b2a8&oh=00_AQO3C9wgOs_yI4-c-DAFGliObztHXx0YvxgrnqHscx1tPg&oe=6AC19045" 
    },
    { 
        id: 4, 
        name: "Yama Gears Heavyweight Hoodie", 
        category: "hoodie", 
        type: "merch", 
        price: 1850, 
        specs: "100% Cotton, Embroidered Mountain Logo", 
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/825279990_4595322457388034_4947922182353773167_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1S6UsENbXCRi4k7iZ954b18iCEvGN-2nXyIIS8Y37abVe2-DJAJj4_LLMaOF4fk3rUtkYwtce1wuLapmPOOfk&_nc_ohc=_29E7vv4HD4Q7kNvwFXywYv&_nc_oc=AdopuSOmgevmufrTpmi3AZCA0aHpTWxLIIRaSqKXz4tASP_lxclXVAi2p6Lxyc2i6wM&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=rT8vCMBzwmoFfVjP9uVd2w&_nc_ss=7b2a8&oh=00_AQPowN25pVbZY1yMbb5YYzg_hBnbYkQm6qIat0o5FI0IlA&oe=6AC1A4FB" 
    },
    { 
        id: 5, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/505928789_24785112871077860_8686120211813223521_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKFxSqiFWTBSbS2ejj8NnqHnwKU2R5Lc4efApTZHktzvKwyM2zc_dSRPF0XNQrhBdmVUWUjnZBsy0l7Rs0iuj_&_nc_ohc=dP-fl9X3czsQ7kNvwELMnMS&_nc_oc=Ado2kbpQqN4QKvN0GIHrD7TAvdFxlmQMa9zD-NJWzi8wXARbjG7csSiRIcTz2vn-Weo&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=C10GN4EPvQJGY7FXS3kj5g&_nc_ss=7b2a8&oh=00_AQORQ4OsigDIJ38aR0F6tcQHHA39zj8y1YjuIYw1lvwamw&oe=6AC16311" 
    },
    { 
        id: 6, 
        name: "Yama Riding Cap", 
        category: "cap", 
        type: "merch", 
        price: 650, 
        specs: "Snapback, Water-Resistant Brim", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/492740282_24438168352438982_5804627805854772866_n.jpg?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF6X7a5l4ED6Z2EG6Ye4A587zWMQEqWRRjvNYxASpZFGCNtW9QBJb722r6pfmjGuTfJW7n41C1R0eeoER7NfWpo&_nc_ohc=sxH0mO-yWlcQ7kNvwEReHd2&_nc_oc=AdrY1U07x_Db6k8SA8BHMS30JD5q4J-mW8cnbNcrAY7lna7osMFNYkidIQjQa6SdvnQ&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=AcFfMUkykEei5uYDyogNoA&_nc_ss=7b2a8&oh=00_AQNo-h-B9YvpB8ax6ldSQFUaWKTYvcGRGFnp5yhiIEWQlA&oe=6AC1764A" 
    },
    { 
        id: 7, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/829196692_4595228590730754_99512575118747408_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZPVXgi9LvxXvZJvJtX-8QmqF8Jd5XAfyaoXwl3lcB_F6dQv6jB87WwEWJ5rIXmGaXEiUCjO0iXkuCuMwfULkw&_nc_ohc=gce57tsOVTcQ7kNvwHP-_uE&_nc_oc=Adp_LbN4wDLy8bPraGtDlKjERF14ewc2qiRIaiEmBNmDiwxwv2JXNH0D5P6oo0P1Po0&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=7UMzhrFnMxFPR46ScvPWzg&_nc_ss=7b2a8&oh=00_AQMNU8yDngbgfOt-eZT2JzSNJ-0jGPLDB-9lkD5Qu68HLA&oe=6AC18229" 
    },
    { 
        id: 8, 
        name: "Yama Checkered Polo", 
        category: "polo", 
        type: "merch", 
        price: 1450, 
        specs: "Casual Riding Apparel, Durable Stitching", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/829603726_4595324297387850_3842815601373458545_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFN5HEJefLMgr6X7mLGK6DUFj4usq3tu0sWPi6yre27S0fcG5lTiwBQwLAGXmUG4pjVn46o8TStw84QcKJjQEt4&_nc_ohc=Y51TQe_Y_iAQ7kNvwFNWrcb&_nc_oc=Adov4haQuUPi5l0ERJz8TzyPN7cpsqGaa1u4vTwfK4h_QYCXBy7HVc-miNjVQjCd7M4&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=_9OKnNWpQwbgpOcZb0UDbg&_nc_ss=7b2a8&oh=00_AQNrB-POZjVff99reLN5BdjG5tthN8HnBHzrB4CtEokVmg&oe=6AC1A8DB" 
    },
    { 
        id: 9, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/829196475_4595230730730540_2368457628400369438_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6MWBVZJu1rxHVm7Jma3MPt81l6gnul5-3zWXqCe6Xn5M8rEj-MU16dTvaz3mWyTeqxzcoiq6Hbt1WIgcPPsj_&_nc_ohc=urAEAoKp174Q7kNvwECxfA3&_nc_oc=AdpVJR5OVPvFllpGUt2_fpx2Tr8gZF5fVn4AGSP3CY3lS2SFqxDJy-NpviI3PH6nmNE&_nc_zt=23&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=dVgI7yHWt3bZmaSEfaea_A&_nc_ss=7b2a8&oh=00_AQMEM3geHmSoXEm0QPX2PbK3ArqTBclGReEkIKNUJ76b_w&oe=6AC17AD5" 
    },
    { 
        id: 10, 
        name: "Yama All-Weather Windbreaker", 
        category: "windbreaker", 
        type: "merch", 
        price: 2100, 
        specs: "Windproof, Compact Foldable", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/827282048_4595327407387539_214812346867746026_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x445&ctp=s1024x445&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQxGU8nSX78QYDlBUMbxnXQryMqtfh6DBCvIyq1-HoMAkz8YTSCRewuVCjwa8JF2ie3ROLnpcu9HtFOShNMgpb&_nc_ohc=8kqO3g_fR8YQ7kNvwE7flXg&_nc_oc=AdqdHGq8QbL7NOdsjEeuec8ez4gDCPoJcSf0h_xoHzxtj1Dsp5OpkbOH8eMEvK9t9FY&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=EGr9_lfMnUMnEpzesmY73g&_nc_ss=7b2a8&oh=00_AQOEAC9N8E0aq2LDVX4lTD51AmDvgZFVwmOjknJaVtktUw&oe=6AC1858A" 
    },
    { 
        id: 11, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/508826344_24854078137514666_1146843166710111177_n.jpg?stp=dst-jpg_tt6&cstp=mx505x757&ctp=s505x757&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGDQK-QVtfVAkjD0pxTyiqZHNKS3OpJEnkc0pLc6kkSeeu_dzOX1GK6fKA2-P1K5Yl8SgAAobtcJQam0olQXmS2&_nc_ohc=sUyyag-qg8QQ7kNvwH5T4k0&_nc_oc=Ado7zB56a4zm7Hi9DmqbFCB1kiZqCfSUqSwjD5_TbNvAH4esHcQkvafwxFmaNPbAz7g&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=TDsZi30fJkbNNOY7Bfs7Tw&_nc_ss=7b2a8&oh=00_AQPYQJst7-UJ0yK3UDxk2-UPqkW2rBctkNClOP88BsVT9w&oe=6AC17E11" 
    },
    { 
        id: 12, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/509422884_24854078090848004_797114143126808645_n.jpg?stp=dst-jpg_tt6&cstp=mx505x759&ctp=s505x759&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpFRP5FYA62dGkrnZ1WwrSInUNyyCl118idQ3LIKXXX7HKupwoEBEKEBu_r0AKybPZEqCo5DZXgHTfbEQAHQOa&_nc_ohc=cLXpsbxXrXwQ7kNvwFS85Vc&_nc_oc=AdpUmohiajLxTKPnRHkQQRC_Dm1zIo-KNeUbt8loFpXQ8xv7xumMAo4Ab7E4NF65ezo&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=QelNJQLWEFM2GsP-zbvBlA&_nc_ss=7b2a8&oh=00_AQOsXppMeIcwsRb8pQPOR-_JN_awpxujP9gVmYOd2tqzXw&oe=6AC159C9" 
    },{ 
        id: 13, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/509427727_24854078427514637_7727181357129933045_n.jpg?stp=dst-jpg_tt6&cstp=mx506x755&ctp=s506x755&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEuHkLBlmswX8ygITAKJxowN8fILYbj42E3x8gthuPjYQjCYmxtAnr8tm2P1pb5AxujMxp6tyLKG9H1bhe6h7Hy&_nc_ohc=BsmpMMOr9YEQ7kNvwHBPrtH&_nc_oc=Ado-tnfVwCCmyHekX6ZpAcvQF1kbTAaQ_shlnlNDPMTbDXikdepeomaCYnIsBkymFec&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=HQybvDs6Ugnb6lXzK-fNUg&_nc_ss=7b2a8&oh=00_AQNBhML6LBwacsjj21ONXe6UaxYkNMdU-5OEo_clF8UhlA&oe=6AC17A2C" 
    },{ 
        id: 14, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/508934861_24854078050848008_4407161644729323143_n.jpg?stp=dst-jpg_tt6&cstp=mx433x652&ctp=s433x652&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHT5s2NjQprASlyk9QXzyK921BofIXyJvfbUGh8hfIm99x0jIF3CYfK6VtDadT5OjV7chRYBTY8xmM8__EbJuUD&_nc_ohc=GzlsccN2pqMQ7kNvwHFJWlD&_nc_oc=Ado6Z7pEqJQMiR3PwZ9bs-il25PUkr0-pcUbbaPBR_-_2LXDu_XkWlhJyzjbSfjAKkg&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=Es2tRB8HS72Uk2up90BLBQ&_nc_ss=7b2a8&oh=00_AQPWy6j8nx9olw2JWK2MdGsPNP_L9Aoi-pBRC_mmQhrRJg&oe=6AC15523" 
    },{ 
        id: 15, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/508674447_24854078070848006_7075197354736139205_n.jpg?stp=dst-jpg_tt6&cstp=mx506x759&ctp=s506x759&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE7qT4Goqhnrs6d_Cp1o8LFBzo82G9qXCgHOjzYb2pcKECn-bJb7caOEOpv4V9v4KQnCl46vAXT9_Do_k7vkaVs&_nc_ohc=84J2YxFDeUQQ7kNvwETKy_S&_nc_oc=Adq3dzMDeppPgdPNG-dz52YxX2DEc_aCxIpVUuKUTaBxlajITJfn2O1Yd-pcRDTI7Ak&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=m6ObnY4CUJyIn9U6Lt0dTA&_nc_ss=7b2a8&oh=00_AQPRt9sjFJvMLLBu3Kjg1xHE1XOgFLzZlVS2qhKwx55p0Q&oe=6AC15C81" 
    },{ 
        id: 16, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/508610897_24854078094181337_3319065751272561834_n.jpg?stp=dst-jpg_tt6&cstp=mx1284x1004&ctp=s1284x1004&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEWMrir4LCqg12JkPidTddZUVtAu7W7YGxRW0C7tbtgbF3nqwlw8ZG1F01EWfcaHj6FwEW9E0CDIycftBHg8s5h&_nc_ohc=0u1_y1SwcXMQ7kNvwHP8fYD&_nc_oc=AdqKfO5TuR8vPPW3Y2Zkl7XmH9fH40IEoDSWLna50OvllGIjdzau_uc8jM-wXGx4ZPs&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=_SzraDef2R6uj_VZpKsQSw&_nc_ss=7b2a8&oh=00_AQNLn7zDQvrN2wMKfiNhpop45RwVQudYXBwxGZF-7un5ew&oe=6AC17FAB" 
    },{ 
        id: 17, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/508763675_24854078077514672_3559294976561690073_n.jpg?stp=dst-jpg_tt6&cstp=mx556x837&ctp=s556x837&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGX7ArDzWcGYpbZwa5Hafh06mQUlw1STOnqZBSXDVJM6UmpV46XPOhmrgMu7HDdtr8Rri9goHmCuatXB8AX1T3E&_nc_ohc=WPbiSbJgQuoQ7kNvwHd3fSV&_nc_oc=Adov6oGlT0AYLo5MVj8t_agzUBvY6aDzj64oZkOxR4M6kn_tHbsAKLVm8rd9T53-sYI&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=Murllg3N-qJ79YOS60NeAA&_nc_ss=7b2a8&oh=00_AQNKkNq4HGFb4O6FwwWlQqUaspYicj_mE27Wzxu6V5yPEA&oe=6AC188AE" 
    },{ 
        id: 18, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/509423941_24854078074181339_6310466954338422737_n.jpg?stp=dst-jpg_tt6&cstp=mx579x872&ctp=s579x872&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE2VEmPSXjE7jK390ZWXgrVnqXF-R88m5CepcX5HzybkAg5Zw1irwDtnj0sk7bWZtT-ZHJH_IVf1p7zIzhoNCn6&_nc_ohc=qAshwvHOwc4Q7kNvwGG7v1x&_nc_oc=AdpXlJTsuu3FlEq6X_m1ppgNo5RZTQUv16MqVR0eAL99WtixEZk3KFLDa7aMr3EZVHQ&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=jKwcOc3CfZHIEYegD0Hu7A&_nc_ss=7b2a8&oh=00_AQO3E-w95e0dpg0z5_9YP1u9DlECUQyzUGZgs7fIafaoHg&oe=6AC15BC7" 
    },{ 
        id: 19, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/509406862_24854078154181331_513385687667375717_n.jpg?stp=dst-jpg_tt6&cstp=mx578x874&ctp=s578x874&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-OVvIAnqnI84MFryK_1Qr6Rcam8dGuufpFxqbx0a6596w72IIy3LmUrwljznZ3X5es6me8F5EZJp2QO3zi7iq&_nc_ohc=EqS5RsVx5_oQ7kNvwFX8aAi&_nc_oc=AdoTdNQ0MWRzTL0GlyG27ve_vyAHPDG-ehnxXy-b4e0Iw8PG51h30Kee_JuvVW0p81E&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=4Wnuw5vp1IfAnG-vaF128w&_nc_ss=7b2a8&oh=00_AQNb_SFSorDplHYbbJ1NuQv8bYmp4PUC0j7ZKiwpd2mIzA&oe=6AC18004" 
    },
    { 
        id: 20, 
        name: "Yama Classic Logo Tshirt", 
        category: "tshirt", 
        type: "merch", 
        price: 750, 
        specs: "Premium Cotton Blend, EST. 2020 Logo", 
        image: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/510169964_24854078084181338_5144954769614833930_n.jpg?stp=dst-jpg_tt6&cstp=mx505x762&ctp=s505x762&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFInZylCzSBFkdVPPxCGec8d6bOnMp5Bd93ps6cynkF3wfLY_FbgJ4bG9yQlqX6rZMQoQ7sH2GHdtmGfnAk6zj0&_nc_ohc=bTzqn2-OzQ4Q7kNvwHeMkCd&_nc_oc=AdqSvqLRhytzhfK1_hSEfvoTzbT9fi5WpCdSLoSmkeFW2vES7mWNk2HMM5UUpvuFYb8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=JYOcJ9Zp67XBkH4L7-448g&_nc_ss=7b2a8&oh=00_AQORBBDC5yvgqhHH97pkhSS0pakPoAfL5lcaBYjjQ6fJxA&oe=6AC17758" 
    },
    { 
        id: 21, 
        name: "SMITH Mainline Helmet & Goggle Set", 
        category: "gears", 
        type: "merch", 
        price: 22500, 
        specs: "SMITH Mainline full-face helmet in Size Medium, comes with its original storage bag.", 
        image: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/786929310_1408573711369379_8198969178890679706_n.jpg?stp=dst-jpg_tt6&cstp=mx1320x1509&ctp=s1320x1509&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMrzfbs95b4gBKE_rCAqtbzcygtkbL3z7NzKC2RsvfPtLV8joGUEyOgg1xkO_dPtMQt0ziUD0bqmJs3N4gCny_&_nc_ohc=gf6x_0j-3hMQ7kNvwFIN3r7&_nc_oc=AdoY9_aTeC1SWA_Bd3lzJnOaUnbsiSlRBtDVYjA6ZnWsvmCb6ITOMtoOktm_WElGwLQ&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=E1BcQ12DaAT4kGNwMT3QPA&_nc_ss=7b2a8&oh=00_AQNVnhPV4bcRNc6CKZHRsozUkEialVmXQ70ucY1vVYXkkw&oe=6AC17BF2" 
    },
    { 
        id: 22, 
        name: "Fox Speedframe Pro Helmet", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "Adjustable visor, optimized ventilation ports, and extended coverage on the back of the head typical for trail and enduro riding.", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/724958717_1345951684298249_4282887697242707839_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHA565kfN-rqJvY0PlkEMIHDa0VTOhbpocNrRVM6Fumh2g59AuGq7tm6sGdXuOdW8WbYHO-lt0dxyD2DJS1Dp84&_nc_ohc=xd1K4d5gFisQ7kNvwHk5PTy&_nc_oc=Adojdl8kq0ziCN6nEjRyUKnUrq5A21EiMvocvURZFObiVYscOcBHicmWEokW7iFwIhA&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=yxD62CFXpLyA4YIXweUtvA&_nc_ss=7b2a8&oh=00_AQO9MGGq7TVkYF2mXrcNeM9wXI_lNkDtTvccjCBL9A567w&oe=6AC1B635" 
    },
    { 
        id: 23, 
        name: "Fox Boa 26.5 & Crankbrothers Cleat Pedals", 
        category: "gears", 
        type: "merch", 
        price: 20999, 
        specs: "Dual BOA Dial Closure, Size 26.5cm (EU 41.5-42)", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/721466840_1340916604801757_1335945546914201463_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEMsearRqQ9Sx-SeN03HBpXwfzcPavlv-PB_Nw9q-W_4-HdDr2e9sIoxPMd2efk3lF4Dke10t2jKyUGP5KtetOA&_nc_ohc=ors1PRDeLkAQ7kNvwHbSk_0&_nc_oc=Adpe9yelbGpHLTEZAVqLZzGdFAfSlC_cPfmTL3zb0UR7kgSgOMZ77SDSq1rbZyyFHKM&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=D8HZrGd-SnF81HCT-PQ0Ew&_nc_ss=7b2a8&oh=00_AQNgd4EGNv3EVp87Hx27R1E5uQgDSTYLAH9hxX6cpIbefA&oe=6AC1B0F7" 
    },
    
    // SECONDARY PRODUCTS: MTB Parts & Complete Bikes
    { 
        id: 24, 
        name: "SRAM Code R hydraulic disc brake lever", 
        category: "parts", 
        type: "bikes", 
        price: 8500, 
        specs: "Imported Japan Stock, 4-Piston", 
        image: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t51.75761-15/500862177_18051149750587265_4909245303662948710_n.jpg?stp=dst-jpegr_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFwmIrAyOCY7m8OQKh1Sf6EQLxGV_M0MGtAvEZX8zQwawu8_OY3HpULO5bZjtnHL8vUwh4ezwGpV9oO2aUOmeGW&_nc_ohc=cEUJgjpt540Q7kNvwE92qZT&_nc_oc=AdpI20qNYY4gcCisv4XmXJnPqP-nvzhnUMeb-0hU2V4qlXR1SyMPyXRDzHPO-Wb1sb0&_nc_zt=23&se=-1&_nc_ht=scontent.fmnl17-4.fna&_nc_gid=wSWlOfss4MoWqbhqdxAUuQ&_nc_ss=7b2a8&oh=00_AQO5ABJ0Wmpg00KgmsSTQTqcPN22TvsrzOcgbBzkSm61sA&oe=6AC16FA3" 
    },
    { 
        id: 25, 
        name: "Trek Fuel EX", 
        category: "parts", 
        type: "bikes", 
        price: 58000, 
        specs: "Full Suspension Alloy Frame, Rear Shock Included, Boost 148 Spacing", 
        image: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/717067140_1338604988366252_86125084678961416_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdw2ZLF5RLPj8IMDAgnLRDfLGScBRbDtF8sZJwFFsO0ZRP-tTt4AR6nHcSmV52lH8HDEt23lQIv__FHGHX46Au&_nc_ohc=eq6CoWw4sSMQ7kNvwHwy_iP&_nc_oc=Adp2HSB2USrS60IYBR4eS2oxvnpT2-6wYsbOh0dji8keuLmEP7-4kNo_KbyndOv0YH8&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=B7g7fP12xvtnIm17fudYlw&_nc_ss=7b2a8&oh=00_AQNMX8W5m9EeDtyhoCCaLxBI66rMq7YQhWA_2ZX0klwa4Q&oe=6AC1A363" 
    },
    { 
        id: 26, 
        name: "TRP TRAIL EVO 4P", 
        category: "parts", 
        type: "bikes", 
        price: 10500, 
        specs: "4-Piston Hydraulic Disc Brake Set, High-Flow Calipers, Ergonomic Levers", 
        image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/637739474_1250252627201489_7108670010271602213_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpXUhjMFUBlmf8V3TUJp8GJnb7pPSl6yYmdvuk9KXrJgRGr95V9QwI_42T4UHMlFoKagp3VfMW-W1sri7thaGN&_nc_ohc=7zzS9wlQbsEQ7kNvwGnsk52&_nc_oc=AdrCQU1TU7wllGCRM3t4KKSRgXWfgbzaEUSxPKsYmrgl7Pnodm2O91cKi4UifpwazGo&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=ugE1qFFIwb5hlHtmXBWhFA&_nc_ss=7b2a8&oh=00_AQM-uvN1Tqg8k3izTlJrRGu2-VFLE60u4GKXlwqAigfXlw&oe=6AC1A719" 
    },
    { 
        id: 27, 
        name: "Bold Linkin 150 Pro Carbon", 
        category: "bikes", 
        type: "bikes", 
        price: 138000, 
        specs: "SRAM 1x12 Speed, Öhlins Air Suspension, SRAM Code R Brakes, Medium", 
        image: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.99422-6/822134081_3004580086556373_6649130182632334984_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEaS0ql7fZlq0mmmxe6ukqrRCyfBJGIeytELJ8EkYh7KyrVNz0V6eG7kXLtcc1hwglDA3H7KGT5qXB1HFPzH2BU&_nc_ohc=2I7wpByGCs4Q7kNvwEfbOQA&_nc_oc=AdolXb1rTPYkn2iVkz-ce-LsnxOfLpA2JaWQ1A-QVRFw_pFMgXP2TqNOdcVffNtG8Lc&_nc_zt=14&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=qaHMwaD6pAs7Z_DDpqkKVg&_nc_ss=7b2a8&oh=00_AQM55dicsIuFOMs6dpt4vHvL7p8Ct0-AMnzsoTlMyulvgQ&oe=6AC195BA" 
    },
    { 
        id: 28, 
        name: "Trek Slash 8", 
        category: "bikes", 
        type: "bikes", 
        price: 200000, 
        specs: "Aggressive long-travel enduro bike built to conquer high-speed downhill trails and rough technical terrain.", 
        image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.99422-6/797888047_1366288138995066_3230753266269467444_n.png?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcHJbQ6TUBgAvEhawYW8-0Yg20kI4EbAJiDbSQjgRsAjYZpS9n7cEWF8GYBQ5lTsUlnHRK8Z8qH6PMjrbwTCyv&_nc_ohc=N21GpNQZZ3QQ7kNvwFruN7B&_nc_oc=AdqoCilMwOPxENB9JOud11ClG2dG_IQIcJoVUmSW0wndy5_1XjUpCIeaaCQBeUJvom8&_nc_zt=14&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=iOAvLsbGbFmjBlYkpeu0aA&_nc_ss=7b2a8&oh=00_AQMO4CFELCYosyFXAm4WXuoJcfhdgwzolIGnAiy6LnJvEA&oe=6AC19348" 
    },
    { 
        id: 29, 
        name: "Specialized Stumpjumper Evo alloy", 
        category: "bikes", 
        type: "bikes", 
        price: 250000, 
        specs: "Versatile all-mountain trail bike with adjustable geometry, engineered for smooth climbing and aggressive descents.", 
        image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/793869173_1414489320777818_3916712610404427997_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s590x590&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQeU0gWdk2Cb93jEYRW6GJCbjDX_VoSvQJuMNf9WhK9KO78tOngHLHNE6jzgEUEaiN9vUN5AF-6gDgLBG_Od9I&_nc_ohc=aXftms8SHV0Q7kNvwFpF3vI&_nc_oc=AdroOH0bupeTu_tPYtFgjTB-NewGuGK5ZkS8tgIpl8q03PgKYOVvJKmuJ2oI-XMfQf4&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=aimE31ZiW2A2LXkrSZHowA&_nc_ss=7b2a8&oh=00_AQP0b_hDhaEBRASF8Kcruc6P7VOTKRlJs8uyFEbKF6BwjQ&oe=6AC1ACF4" 
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

// Cart System
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    saveCart();
    alert(`${item.name} added to your order cart.`);
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