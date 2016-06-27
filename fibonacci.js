var a = 0, b = 1, c = 0;
for(var i = 0; i < 99;i++)
{
  a = b + c;
  console.log(a);
  c = b;
  b = a;
}
