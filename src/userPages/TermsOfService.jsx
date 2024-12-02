import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemText, 
  Paper 
} from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, direction: 'rtl', textAlign: 'right' }}>
      <Paper elevation={3} sx={{ p: 4 ,my:4}}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          اتفاقية مستوى الخدمة
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {"مقدمة :"}
          </Typography>
          <Typography paragraph>
           {" سعياً من الهيئة السعودية للبيانات والذكاء الاصطناعي إلى تحقيق رضا العملاء، وحرصاً على تمكين العميل من الاستفادة الكلية من الخدمات المقدمة من الهيئة والارتقاء بجودة الخدمات في جميع الأوقات، وتقديم الدعم اللازم في أسرع وقت ممكن، نقدم لكم اتفاقية مستوى الخدمة والمعايير المتعلقة بالخدمات المقدمة، حيث تتم المراجعة الدورية لأداء الخدمات المقدمة وتحسينها بشكل مستمر."}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
           {" المساعدة والدعم الفني :"}
          </Typography>
          <Typography paragraph>
           {" يتم تقديم الدعم الفني عن طريق استقبال البلاغات من الساعة (8:00ص) - (11:59م). خلال شهر رمضان سيكون تقديم الدعم الفني على مدار (24) ساعة عن طريق قنوات التواصل."}
          </Typography>
        </Box>

        {/* <Box sx={{ mb: 3 ,direction:'rtl'}}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {"  الملاحظات والشكاوى :"}
          </Typography>
          <Typography paragraph>
          {"  نسعد باستقبال ملاحظاتكم التي تسهم في تحسين تقديم الخدمة واستقبال الشكاوى في حال عدم الرضا عن الخدمة المقدمة لكم عبر القنوات المتاحة للعميل."}
          </Typography>
          <Typography paragraph>
          {"  يمكنكم إرسال الشكوى مباشرة عبر الرقم الموحد 8001247000 او عبر منصة إكس Ehsan_care@ تتم خدمة العميل بشكل فوري وذلك عبر الاتصال بالرقم الموحد، ويتم الرد على الإستفسارات او الشكاوى من خلال موظف خدمة العملاء. في حال لم تتم خدمتكم بشكل فوري :"}
          </Typography>
          <List sx={{alignContent:'right', direction:'rtl', textAlign:'right'}} >
            <ListItem >
              <ListItemText primary="يتم تسجيل الشكوى في النظام مع توضيح البيانات الشخصية للعميل."   />
            </ListItem>
            <ListItem>
              <ListItemText primary="تصل إلى العميل رسالة نصية برقم الشكوى." />
            </ListItem>
            <ListItem>
              <ListItemText primary="يمكنك الإستفسار في أي وقت عن حالة الشكوى عبر الاتصال الموحد." />
            </ListItem>
          </List>
        </Box> */}


<Box sx={{ mb: 3, direction: 'rtl' }}>
  <Typography 
    variant="h6" 
    sx={{ 
      fontWeight: 'bold', 
      textAlign: 'right',
      direction: 'rtl' 
    }}
  >
    {"  الملاحظات والشكاوى :"}
  </Typography>
  <Typography 
    paragraph 
    sx={{ 
      textAlign: 'right', 
      direction: 'rtl' 
    }}
  >
    {"  نسعد باستقبال ملاحظاتكم التي تسهم في تحسين تقديم الخدمة واستقبال الشكاوى في حال عدم الرضا عن الخدمة المقدمة لكم عبر القنوات المتاحة للعميل."}
  </Typography>
  <Typography 
    paragraph 
    sx={{ 
      textAlign: 'right', 
      direction: 'rtl' 
    }}
  >
    {"  يمكنكم إرسال الشكوى مباشرة عبر الرقم الموحد 8001247000 او عبر منصة إكس Ehsan_care@ تتم خدمة العميل بشكل فوري وذلك عبر الاتصال بالرقم الموحد، ويتم الرد على الإستفسارات او الشكاوى من خلال موظف خدمة العملاء. في حال لم تتم خدمتكم بشكل فوري :"}
  </Typography>
  <List 
    sx={{
      direction: 'rtl', 
      textAlign: 'right',
      '.MuiListItem-root': {
        textAlign: 'right',
        justifyContent: 'flex-end'
      }
    }}
  >
    <ListItem 
      sx={{ 
        '& .MuiListItemText-primary': {
          textAlign: 'right',
          direction: 'rtl'
        }
      }}
    >
      <ListItemText 
        primary="يتم تسجيل الشكوى في النظام مع توضيح البيانات الشخصية للعميل."
        primaryTypographyProps={{
          sx: {
            textAlign: 'right',
            direction: 'rtl'
          }
        }}
      />
    </ListItem>
    <ListItem 
      sx={{ 
        '& .MuiListItemText-primary': {
          textAlign: 'right',
          direction: 'rtl'
        }
      }}
    >
      <ListItemText 
        primary="تصل إلى العميل رسالة نصية برقم الشكوى."
        primaryTypographyProps={{
          sx: {
            textAlign: 'right',
            direction: 'rtl'
          }
        }}
      />
    </ListItem>
    <ListItem 
      sx={{ 
        '& .MuiListItemText-primary': {
          textAlign: 'right',
          direction: 'rtl'
        }
      }}
    >
      <ListItemText 
        primary="يمكنك الإستفسار في أي وقت عن حالة الشكوى عبر الاتصال الموحد."
        primaryTypographyProps={{
          sx: {
            textAlign: 'right',
            direction: 'rtl'
          }
        }}
      />
    </ListItem>
  </List>
</Box>


        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            آلية تصعيد الشكوى :
          </Typography>
          <Typography paragraph>
            يحق للعميل الذي يرى أن معالجة الشكوى لم تكن منصفة له أن يبلغ مسؤول شكاوى العملاء، ويتم عرضها على مستوى إداري أعلى لمراجعتها. في حال عدم رضاك عن حل الشكوى يمكنك تصعيد الشكوى من خلال الرقم 8001247000
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', direction:'rtl' }}>
          {"  الخصوصية وسرية المعلومات :"}
          </Typography>
          <Typography paragraph>
            {"تحرص الهيئة السعودية للبيانات والذكاء الاصطناعي على الحفاظ على خصوصية وسرية معلومات المستخدمين، وتطبيق السياسات المتعلقة بخصوصية البيانات وذلك عند طلب بيانات العميل الشخصية مثل رقم الهوية، الاسم الثلاثي، رقم الجوال، وفي حالات استرجاع المبالغ يتم طلب آخر ٦ أرقام من بطاقة الدفع. لمزيد من التفاصيل بإمكانك الرجوع إلى سياسة الخصوصية"}
          </Typography>
        </Box>

        {/* <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', direction:'rtl' }}>
            {"قيود الإستفادة من الخدمات :"}
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="لا تشمل مستويات الخدمة توقف الخدمة الناتج عن طرف ثالث نتيجة عوامل خارجة عن مقدم الخدمة، وتشمل القوة القاهرة أو حالات خارجة عن حدود مقدم الخدمة أو في حال حدوث أوضاع كارثية في مرافق مقدم الخدمة." />
            </ListItem>
            <ListItem>
              <ListItemText primary="العميل مسؤول عن صحة البيانات المقدمة لمقدم الخدمة." 
                // set rtl
              />
            </ListItem>
          </List>
        </Box> */}


<Box sx={{ 
  mb: 3, 
  direction: 'rtl', 
  textAlign: 'right' 
}}>
  <Typography 
    variant="h6" 
    sx={{ 
      fontWeight: 'bold', 
      textAlign: 'right',
      direction: 'rtl'
    }}
  >
    {"قيود الإستفادة من الخدمات :"}
  </Typography>
  <List 
    sx={{ 
      direction: 'rtl',
      '.MuiListItem-root': {
        textAlign: 'right'
      }
    }}
  >
    <ListItem 
      sx={{ 
        textAlign: 'right',
        '& .MuiListItemText-primary': {
          textAlign: 'right',
          direction: 'rtl'
        }
      }}
    >
      <ListItemText 
        primary="لا تشمل مستويات الخدمة توقف الخدمة الناتج عن طرف ثالث نتيجة عوامل خارجة عن مقدم الخدمة، وتشمل القوة القاهرة أو حالات خارجة عن حدود مقدم الخدمة أو في حال حدوث أوضاع كارثية في مرافق مقدم الخدمة." 
        primaryTypographyProps={{
          sx: {
            textAlign: 'right',
            direction: 'rtl'
          }
        }}
      />
    </ListItem>
    <ListItem 
      sx={{ 
        textAlign: 'right',
        '& .MuiListItemText-primary': {
          textAlign: 'right',
          direction: 'rtl'
        }
      }}
    >
      <ListItemText 
        primary="العميل مسؤول عن صحة البيانات المقدمة لمقدم الخدمة." 
        primaryTypographyProps={{
          sx: {
            textAlign: 'right',
            direction: 'rtl'
          }
        }}
      />
    </ListItem>
  </List>
</Box>


        <Box sx={{ mb: 3 ,direction:'rtl' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold',  }}>
            قائمة الخدمات :
          </Typography>
          <Typography paragraph>
            يتم تقديم الخدمات الإلكترونية وفق المستويات التالية:
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>الخدمات</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>المدة الزمنية لإتمام الخدمة</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>توفر الخدمة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>برنامج الأضاحي</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>9 أيام</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>7/24</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>ذبح الأضحية خلال موسم الحج</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>يوم واحد ، خلال أيام التشريق</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>7/24</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>إعتماد الحملات</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>يوم واحد</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>7/24</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>الخدمات الأخرى</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>يوم واحد</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>7/24</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            قنوات التواصل المتاحة لإستقبال الملاحظات و الشكاوي :
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>رقم التواصل</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>8001247000</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>توفر الخدمة : من 8 ص - 11:59 م(رمضان 24 /7) مدة الإستجابة: 60 ثانية</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>الدعم الفني عن طريق X</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>Ehsan_care@ توفر الخدمة : 24/7 مدة الاستجابة : 120 دقيقة</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>نموذج التواصل</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>رابط النموذج توفر الخدمة : 24/7 مدة الاستجابة : 60 دقيقة</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>

        <Typography paragraph>
          <strong>المدة المتوقعة لمعالجة الشكوى 10 أيام عمل</strong>
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfService;