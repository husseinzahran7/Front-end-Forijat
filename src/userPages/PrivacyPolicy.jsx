import React from 'react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
  ...theme.typography,
  textAlign: 'right', // Set text alignment to right
  direction: 'rtl', // Set direction to RTL for proper rendering
  fontSize: '1.4em', // Increase font size
//   fontSize:{PrivacyPolicyRoles.title:'1.4em'}

}));

const PrivacyPolicyRoles = [
    {
      title: 'البند (الأول): مقدمة',
      content: 'حرصًا من منصة "امل" (ويشار إليها فيما يلي بـ "منصة امل") على تقديم أفضل مستويات الخدمة، وإيمانًا منها بأهمية البيانات وسريتها، ومن ذلك سرية وخصوصية بيانات المستخدم والبيانات المدخلة، فإن منصة تلتزم بالمحافظة على سرية وخصوصية هذه البيانات، كما أنها لن تقوم بالإفصاح عن تلك المعلومات إلا وفقًا للضوابط المحددة والمنصوص عليها في البند الرابع (الاستخدام والإفصاح)، علماً بأن الخصوصية وسرية المعلومات الموضحة أدناه جزءاً من شروط استخدام منصة امل.',
    },
    {
      title: 'البند (الثاني): بيانات المستخدم',
      content: 'يقصد بمصطلح "بيانات المستخدم" كل وأيّ مما يلي:‌البيانات الشخصية المستخدمة في التسجيل. بيانات الاتصال والتحديثات المتعلقة بالاستخدام: بيانات الاتصال ومن ذلك البيانات المتعلقة بالجهاز المستخدم للاتصال مثل لغة الجهاز ونوع النظام ونوع المتصفح. المعلومات المدخلة من المستخدم مثل طلبات الاستفسارات، البلاغات، والإجابة عن أي استبيانات يتم عرضها من خلال المنصة.',
    },
    {
      title: 'البند (الثالث): جمع البيانات وتخزينها',
      content: 'جمع البيانات: يوافق زائر منصة امل على قيام منصة امل بجمع بيانات المستخدم. تخزين البيانات: يتم تخزين البيانات الخاصة بالمستخدم في الخوادم التي تحددها منصة امل داخل المملكة الاردنية الهاشمية، وتحرص المنصة على أن تكون هذه الخوادم محمية من الاختراق والدخول غير المصرح وفق المعايير المتبعة. حذف بيانات الحساب: يسمح بحذف البيانات عن طريق تقديم طلب دعم فني (قنوات الدعم)، وسيتم حذف بيانات الحساب والملف الشخصي وتعديل العمليات المالية المرتبطة بالحساب لتكون تبرع غير مسجل (زائر).',
    },
    {
      title: 'البند (الرابع): الاستخدام والإفصاح',
      content: 'يوافق المستخدم على السماح لمنصة امل (بما فيها الأشخاص المخولين من موظفيها والعاملين فيها) بالوصول إلى بيانات المستخدم. يوافق المستخدم على السماح باستخدام بيانات المستخدم الخاصة به غير المحددة لهويته ضمن بيانات ومؤشرات إحصائية تراكمية ومشاركتها مع كافة الجهات ذات العلاقة حسب ما تراه منصة امل مناسباً. يوافق المستخدم على السماح بالإفصاح عن بيانات المستخدم المتعلقة به إلى الجهات غير الحكومية المصرح لها من الجهات المختصة بالقيام بأداء خدمات حكومية محددة. يقر المستخدم بعلمه بأن لمنصة امل الحق في كشف أي معلومات للجهات المختصة، عندما يكون ذلك ضرورياً للالتزام بأي قانون أو نظام أو طلب ح الحكومي أو قضائي.',
    },
    {
      title: 'البند (الخامس): الروابط الخارجية',
      content: 'قد تقدم منصة امل روابط لأطراف أخرى، والمنصة غير مسؤولة عن كيفية جمع الأطراف الأخرى أو استخدامها لمعلومات التعريف الشخصية عن المستخدم، وعلى المستخدم الرجوع إلى إشعارات الخصوصية الخاصة بتلك المواقع.',
    },
    {
      title: 'البند (السادس): مسؤولية المستخدم تجاه حماية الخصوصية',
      content: 'بهدف حماية بيانات المستخدم فإن منصة امل تنصح بما يلي: الاتصال الفوري بالدعم الفني لمنصة امل عندما يعتقد المستخدم بأن شخصًا آخر استطاع الحصول على معلومات الدخول إلى حسابه في المنصة أو أي معلومة سرية أخرى. عدم إعطاء أي معلومة سرية عبر الهاتف أو شبكة الإنترنت ما لم تعرف هوية الشخص أو الطرف المستقبل للمعلومة. عدم مشاركة معلومات الدخول (اسم المستخدم وكلمة المرور) مع الآخرين. عدم السماح للآخرين باستخدام حساب المستخدم في منصة امل. استخدام المنصة من خلال جهاز إلكتروني آمن مع إغلاق التطبيقات المتصلة بالإنترنت غير المستخدمة. التأكد من أن برنامج الحماية من الفيروسات محدثّ على الدوام.',
    },
    {
      title: 'البند (السابع): أحكام عامة',
      content: 'إن الهيئة الاردنية للبيانات والذكاء الاصطناعي هي الجهة المشرفة على منصة امل. لمنصة امل كامل الحرية في تحديث سياسة الخصوصية هذه في أي وقت، ومن ذلك إضافة أو تغيير أي من أحكام سياسة الخصوصية، وسيتم إشعار المستخدم عن طريق البريد الإلكتروني المسجل لديها عن أي تحديث لهذه السياسة، ويحق لمنصة امل إنهـاء حساب المستخدم في حال عدم قبول المستخدم أي تغيير في سياسة الخصوصية. إن اللغة العربية هي المعتمدة في تطبيق الأحكام والشروط الخاصة بسياسة الخصوصية، وفي حال نشأ خلاف في تفسير أي نص ورد بأي لغة أخرى فيقدم النص المكتوب باللغة العربية. إن سياسة الخصوصية تخضع لأنظمة المملكة الاردنية الهاشمية، وفي حال نشوء خلاف – لا سمح الله – يتعلق بها، فإن الجهة المختصة في المملكة الاردنية الهاشمية هي الجهة المخولة بالنظر في الخلافات المتعلقة أو الناشئة عن سياسة الخصوصية.',
    },
  ];

  function PrivacyPolicy() {
    return (
      <Container maxWidth="md" dir="rtl">
        <StyledTypography variant="h3" component="h1" gutterBottom 
        sx={{mt:8 ,
            fontSize:'1.8em' ,
            fontWeight:900,
            color:'primary'
            }}>
            سياسة الخصوصية
          </StyledTypography>
        <Paper elevation={3} sx={{ p: 4, mt: 2 ,mb: 4 }}>
          
  
          <Grid container spacing={2}>
            {PrivacyPolicyRoles.map((role) => (
              <Grid item xs={12} key={role.title} >
                <StyledTypography variant="h4" component="h1" gutterBottom fontWeight={800} color='primary' >
                  {role.title}
                </StyledTypography>

                {/* <Box sx={{width:{maxWidth:'100%'}}}/> */}

                <StyledTypography variant="body1">{role.content}</StyledTypography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    );
  }
  
  export default PrivacyPolicy;

