const data = [
  {
    id: 1,
    name: "Gato de Bengala o bengalí",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-de-bengala-o-bengali.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/0/8/1/img_180_gato-de-bengala-o-bengali_0_300_square.jpg",
  },
  {
    id: 2,
    name: "Himalayo",
    url: "https://www.expertoanimal.com/razas-de-gatos/himalayo.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/8/9/1/img_198_himalayo_0_300_square.jpg",
  },
  {
    id: 3,
    name: "Gato manx",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-manx.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/9/9/1/img_199_gato-manx_0_300_square.jpg",
  },
  {
    id: 4,
    name: "Gato nebelung",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-nebelung.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/2/1/2/img_212_gato-nebelung_0_300_square.jpg",
  },
  {
    id: 5,
    name: "Maine coon",
    url: "https://www.expertoanimal.com/razas-de-gatos/maine-coon.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/4/1/2/img_214_maine-coon_0_300_square.jpg",
  },
  {
    id: 6,
    name: "Gato ceilán",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-ceilan.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/9/0/2/img_209_gato-ceilan_0_300_square.jpg",
  },
  {
    id: 7,
    name: "Gato kurilian bobtail",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-kurilian-bobtail.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/6/2/8/img_826_gato-kurilian-bobtail_0_300_square.jpg",
  },
  {
    id: 8,
    name: "Gato ragdoll",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-ragdoll.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/4/8/1/img_184_gato-ragdoll_0_300_square.jpg",
  },
  {
    id: 9,
    name: "Gato thai o siamés tradicional",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-thai-o-siames-tradicional.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/3/5/8/img_853_gato-thai-o-siames-tradicional_0_300_square.jpg",
  },
  {
    id: 10,
    name: "Gato german rex o rex alemán",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-german-rex-o-rex-aleman.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/2/5/8/img_852_gato-german-rex-o-rex-aleman_0_300_square.jpg",
  },
  {
    id: 11,
    name: "Gato don sphynx o donskoy",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-don-sphynx-o-donskoy.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/0/5/8/img_850_gato-don-sphynx-o-donskoy_0_300_square.jpg",
  },
  {
    id: 12,
    name: "Gato neva masquerade",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-neva-masquerade.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/5/8/img_851_gato-neva-masquerade_0_300_square.jpg",
  },
  {
    id: 13,
    name: "Van turco",
    url: "https://www.expertoanimal.com/razas-de-gatos/van-turco.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/5/0/2/img_205_van-turco_0_300_square.jpg",
  },
  {
    id: 14,
    name: "Gato snowshoe",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-snowshoe.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/1/0/2/img_201_gato-snowshoe_0_300_square.jpg",
  },
  {
    id: 15,
    name: "Gato Chantilly-Tiffany",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-chantilly-tiffany.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/2/3/8/img_832_gato-chantilly-tiffany_0_300_square.jpg",
  },
  {
    id: 16,
    name: "Gato colorpoint",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-colorpoint.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/3/3/8/img_833_gato-colorpoint_0_300_square.jpg",
  },
  {
    id: 17,
    name: "Gato angora turco",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-angora-turco.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/3/8/1/img_183_gato-angora-turco_0_300_square.jpg",
  },
  {
    id: 18,
    name: "Gato minskin",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-minskin.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/6/3/8/img_836_gato-minskin_0_300_square.jpg",
  },
  {
    id: 19,
    name: "Gato Habana",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-habana.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/0/1/2/img_210_gato-habana_0_300_square.jpg",
  },
  {
    id: 20,
    name: "Gato común europeo",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-comun-europeo.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/4/2/5/img_524_gato-comun-europeo_0_300_square.jpg",
  },
  {
    id: 21,
    name: "Ragamuffin",
    url: "https://www.expertoanimal.com/razas-de-gatos/ragamuffin.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/3/1/2/img_213_ragamuffin_0_300_square.jpg",
  },
  {
    id: 22,
    name: "Ashera",
    url: "https://www.expertoanimal.com/razas-de-gatos/ashera.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/5/1/2/img_215_ashera_0_300_square.jpg",
  },
  {
    id: 23,
    name: "Gato británico de pelo largo",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-britanico-de-pelo-largo.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/6/9/1/img_196_gato-britanico-de-pelo-largo_0_300_square.jpg",
  },
  {
    id: 24,
    name: "Gato khao manee",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-khao-manee.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/6/0/2/img_206_gato-khao-manee_0_300_square.jpg",
  },
  {
    id: 25,
    name: "Gato caracat",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-caracat.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/9/9/7/img_799_gato-caracat_0_300_square.jpg",
  },
  {
    id: 26,
    name: "Gato singapura o singapur",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-singapura-o-singapur.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/4/8/7/img_784_gato-singapura-o-singapur_0_300_square.jpg",
  },
  {
    id: 27,
    name: "Gato highland fold",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-highland-fold.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/0/9/7/img_790_gato-highland-fold_0_300_square.jpg",
  },
  {
    id: 28,
    name: "Gato bobtail americano",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-bobtail-americano.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/2/9/7/img_792_gato-bobtail-americano_0_300_square.jpg",
  },
  {
    id: 29,
    name: "Gato ural rex",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-ural-rex.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/9/7/img_791_gato-ural-rex_0_300_square.jpg",
  },
  {
    id: 30,
    name: "Gato cymric",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-cymric.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/3/8/7/img_783_gato-cymric_0_300_square.jpg",
  },
  {
    id: 31,
    name: "Gato skookum",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-skookum.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/5/8/7/img_785_gato-skookum_0_300_square.jpg",
  },
  {
    id: 32,
    name: "Gato bobtail japonés",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-bobtail-japones.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/7/0/2/img_207_gato-bobtail-japones_0_300_square.jpg",
  },
  {
    id: 33,
    name: "Gato toyger",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-toyger.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/4/0/2/img_204_gato-toyger_0_300_square.jpg",
  },
  {
    id: 34,
    name: "Gato munchkin",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-munchkin.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/6/0/6/img_606_gato-munchkin_0_300_square.jpg",
  },
  {
    id: 35,
    name: "Gato american wirehair",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-american-wirehair.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/1/9/6/img_691_gato-american-wirehair_0_300_square.jpg",
  },
  {
    id: 36,
    name: "Gato pixie bob",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-pixie-bob.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/0/6/6/img_660_gato-pixie-bob_0_300_square.jpg",
  },
  {
    id: 37,
    name: "Gato tonkinés",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-tonkines.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/4/4/6/img_644_gato-tonkines_0_300_square.jpg",
  },
  {
    id: 38,
    name: "Gato LaPerm",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-laperm.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/3/6/img_631_gato-laperm_0_300_square.jpg",
  },
  {
    id: 39,
    name: "Gato burmilla",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-burmilla.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/8/0/2/img_208_gato-burmilla_0_300_square.jpg",
  },
  {
    id: 40,
    name: "Gato curl americano",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-curl-americano.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/4/9/1/img_194_gato-curl-americano_0_300_square.jpg",
  },
  {
    id: 41,
    name: "Gato montés",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-montes.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/2/1/6/img_612_gato-montes_0_300_square.jpg",
  },
  {
    id: 42,
    name: "Gato burmés",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-burmes.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/7/9/1/img_197_gato-burmes_0_300_square.jpg",
  },
  {
    id: 43,
    name: "Gato chausie",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-chausie.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/9/5/img_591_gato-chausie_0_300_square.jpg",
  },
  {
    id: 44,
    name: "Gato devon rex",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-devon-rex.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/9/8/5/img_589_gato-devon-rex_0_300_square.jpg",
  },
  {
    id: 45,
    name: "Gato oriental de pelo largo o javanés",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-oriental-de-pelo-largo-o-javanes.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/6/1/6/img_616_gato-oriental-de-pelo-largo-o-javanes_0_300_square.jpg",
  },
  {
    id: 46,
    name: "Gato scottish fold",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-scottish-fold.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/5/1/6/img_615_gato-scottish-fold_0_300_square.jpg",
  },
  {
    id: 47,
    name: "Gato korat",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-korat.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/1/2/img_211_gato-korat_0_300_square.jpg",
  },
  {
    id: 48,
    name: "Gato somalí",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-somali.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/2/0/2/img_202_gato-somali_0_300_square.jpg",
  },
  {
    id: 49,
    name: "Gato sphynx o esfinge",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-sphynx-o-esfinge.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/3/0/2/img_203_gato-sphynx-o-esfinge_0_300_square.jpg",
  },
  {
    id: 50,
    name: "Savannah",
    url: "https://www.expertoanimal.com/razas-de-gatos/savannah.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/6/7/6/img_676_savannah_0_300_square.jpg",
  },
  {
    id: 51,
    name: "Gato cartujo o chartreux",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-cartujo-o-chartreux.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/9/9/5/img_599_gato-cartujo-o-chartreux_0_300_square.jpg",
  },
  {
    id: 52,
    name: "Gato sokoke",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-sokoke.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/2/5/6/img_652_gato-sokoke_0_300_square.jpg",
  },
  {
    id: 53,
    name: "Gato selkirk rex",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-selkirk-rex.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/6/3/6/img_636_gato-selkirk-rex_0_300_square.jpg",
  },
  {
    id: 54,
    name: "Lykoi o gato lobo",
    url: "https://www.expertoanimal.com/razas-de-gatos/lykoi-o-gato-lobo.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/2/0/6/img_602_lykoi-o-gato-lobo_0_300_square.jpg",
  },
  {
    id: 55,
    name: "Gato cornish rex",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-cornish-rex.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/2/4/6/img_642_gato-cornish-rex_0_300_square.jpg",
  },
  {
    id: 56,
    name: "Ocicat o gato ocelote",
    url: "https://www.expertoanimal.com/razas-de-gatos/ocicat-o-gato-ocelote.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/7/4/6/img_647_ocicat-o-gato-ocelote_0_300_square.jpg",
  },
  {
    id: 57,
    name: "Gato peterbald",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-peterbald.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/3/4/6/img_643_gato-peterbald_0_300_square.jpg",
  },
  {
    id: 58,
    name: "Gato oriental de pelo corto",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-oriental-de-pelo-corto.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/3/3/6/img_633_gato-oriental-de-pelo-corto_0_300_square.jpg",
  },
  {
    id: 59,
    name: "Gato siberiano",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-siberiano.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/9/1/img_191_gato-siberiano_0_300_square.jpg",
  },
  {
    id: 60,
    name: "Gato exótico de pelo corto",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-exotico-de-pelo-corto.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/0/1/6/img_610_gato-exotico-de-pelo-corto_0_300_square.jpg",
  },
  {
    id: 61,
    name: "Gato birmano",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-birmano.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/0/9/1/img_190_gato-birmano_0_300_square.jpg",
  },
  {
    id: 62,
    name: "Gato bosque de Noruega",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-bosque-de-noruega.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/6/8/1/img_186_gato-bosque-de-noruega_0_300_square.jpg",
  },
  {
    id: 63,
    name: "El gato abisinio",
    url: "https://www.expertoanimal.com/razas-de-gatos/el-gato-abisinio.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/7/8/1/img_187_el-gato-abisinio_0_300_square.jpg",
  },
  {
    id: 64,
    name: "Gato balinés",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-balines.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/3/9/1/img_193_gato-balines_0_300_square.jpg",
  },
  {
    id: 65,
    name: "British shorthair - Gato británico de pelo corto",
    url: "https://www.expertoanimal.com/razas-de-gatos/british-shorthair-gato-britanico-de-pelo-corto.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/9/8/1/img_189_british-shorthair-gato-britanico-de-pelo-corto_0_300_square.jpg",
  },
  {
    id: 66,
    name: "Gato azul ruso",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-azul-ruso.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/8/5/5/img_558_gato-azul-ruso_0_300_square.jpg",
  },
  {
    id: 67,
    name: "Gato bombay",
    url: "https://www.expertoanimal.com/razas-de-gatos/gato-bombay.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/8/8/1/img_188_el-gato-bombay_0_300_square.jpg",
  },
  {
    id: 68,
    name: "Mau egipcio",
    url: "https://www.expertoanimal.com/razas-de-gatos/mau-egipcio.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/5/8/1/img_185_mau-egipcio_0_300_square.jpg",
  },
  {
    id: 69,
    name: "Australian Mist",
    url: "https://www.expertoanimal.com/razas-de-gatos/australian-mist.html",
    img: "https://t2.ea.ltmcdn.com/es/razas/8/0/5/img_508_australian-mist_0_300_square.jpg",
  },
  {
    id: 70,
    name: "Persa",
    url: "https://www.expertoanimal.com/razas-de-gatos/persa.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/1/8/1/img_181_persa_0_300_square.jpg",
  },
  {
    id: 71,
    name: "Siamés",
    url: "https://www.expertoanimal.com/razas-de-gatos/siames.html",
    img: "https://t1.ea.ltmcdn.com/es/razas/9/7/1/img_179_siames_0_300_square.jpg",
  },
];

export {data};