import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

const CONTENT: Record<Language, { title: string; body: string }[]> = {
  en: [
    { title: "Exclusive Breastfeeding", body: "Breast milk contains all the nutrients a baby needs for the first 6 months. It protects them from infections and helps them grow strong." },
    { title: "Importance of Vaccination", body: "Vaccines protect your children from deadly diseases like Polio, Measles, and Tuberculosis. Follow the schedule to keep them safe." },
    { title: "Antenatal Care", body: "Regular hospital visits during pregnancy help ensure both mother and baby are healthy. Do not miss your appointments." }
  ],
  yo: [
    { title: "Ìfúmọ́lọ́yàn Iyasọtọ", body: "Wara ọmu ni gbogbo awọn eroja ti ọmọ nilo fun awọn oṣu 6 akọkọ. O ṣe aabo fun wọn lọwọ awọn akoran ati iranlọwọ fun wọn lati dagba lagbara." },
    { title: "Pataki Abẹrẹ Àjẹsára", body: "Awọn ajesara ṣe aabo fun awọn ọmọ rẹ lọwọ awọn aarun apaniyan bi Polio, Measles, ati Ikọfe. Tẹle iṣeto lati pa wọn mọ lailewu." },
    { title: "Itọju Antenatal", body: "Awọn abẹwo si ile-iwosan nigbagbogbo lakoko oyun ṣe iranlọwọ rii daju pe iya ati ọmọ wa ni ilera. Maṣe padanu awọn ipinnu lati pade rẹ." }
  ],
  ig: [
    { title: "Inye Nri Nwa Naanị Ara", body: "Mmiri ara nwere nri niile nwa chọrọ maka ọnwa isii mbụ. Ọ na-echebe ha pụọ n'ọrịa ma na-enyere ha aka itolite nke ọma." },
    { title: "Mkpa Ọgwụ Mgbochi Dị", body: "Ọgwụ mgbochi na-echebe ụmụ gị pụọ n'ọrịa na-egbu egbu dị ka Polio, Measles, na Tuberculosis. Soro usoro oge iji debe ha na nchekwa." },
    { title: "Nlekọta Antenatal", body: "Ịga ụlọ ọgwụ mgbe niile n'oge ime na-enyere aka hụ na mama na nwa dị mma. Atula oge n'oge gị." }
  ],
  ha: [
    { title: "Shayar da Nono Kadai", body: "Nonon uwa ya ƙunshi duk abubuwan gina jiki da jariri ke buƙata na tsawon watanni 6 na farko. Yana kare su daga cututtuka kuma yana taimaka musu su girma da ƙarfi." },
    { title: "Muhimmancin Rigakafi", body: "Rigakafi yana kare yaranku daga cututtuka masu kisa kamar Polio, Measles, da Tuberculosis. Bi jadawalin don kiyaye su lafiya." },
    { title: "Kula da Masu Juna Biyu", body: "Yawan zuwa asibiti lokacin da ake da juna biyu na taimaka wajen tabbatar da cewa uwa da jariri suna cikin koshin lafiya. Kar ku rasa lokutan alƙawarinku." }
  ],
  pcm: [
    { title: "Exclusive Breastfeeding", body: "Breast milk get all the food baby need for the first 6 months. E dey protect dem from sickness and help dem grow well-well." },
    { title: "Why Vaccine Good", body: "Vaccine dey protect your pikin from bad-bad sickness like Polio, Measles, and TB. Follow the hospital schedule make your pikin safe." },
    { title: "Pregnancy Check-up", body: "Make you dey go hospital regular when you carry belle. E go make sure say you and your pikin dey alright." }
  ]
};

export function HealthAwareness() {
  const { language, t } = useLanguage();
  const currentLang = language || 'en';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{t.awareness}</h2>
      </div>

      <div className="space-y-4">
        {CONTENT[currentLang].map((item, i) => (
          <Card key={i} className="border-l-4 border-l-[#008080]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-[#008080]">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
