function join(s) {
  return s
    .split(/\n/)
    .filter(Boolean)
    .map((v) => String.prototype.trim.call(v))
    .map((v) => String.prototype.toLocaleLowerCase.call(v));
}

exports.users = join(`
youyiqin
lilyzhaoyilu
hanxuanliang
peteruixi
chang-you
yanjyumoso
Menglin-l
Bochengwan
aatoe
xiezhengyun
sumukeio
chen445
mmboxmm
kidexp
Mahalasu
banjingking
q815101630
lxy030988
luoanyang
NaiveCoder1999
newbeenoob
tongxw
minuet-red
AnhTom2000
zjsuper
ergwang
ff1234-debug
leo173701
BreezePython
JoeyChengTor
taojin1992
suukii
a244629128
liwangping
codewqq
Serena9
xitice
niyaolanggeyo
ymkymk
NorthSeacoder
Craig-cheng
kyrie96521
shuichen17
syymo
Victoria011
zhiyuanpeng
iamtheUsername
pzl233
guoling0019
ai2095
AstrKing
chenming-cao
jaysonss
jensenojs
baoqin87
xixi-jiu
blackCY
luojiamun
HZHENGZHI
WXQkb
leungogogo
machuangmr
mozro0327
last-Battle
yankang233
watermelonDrip
shibingchao123
lilixikun
achilles822
weilantao
hengistchan
Benngfour
15691894985
jsyxiaoba
CodeLabworld
maqianxiong
Bruce-Young233
xbhog
babbomax98
ginnydyy
testeducative
blanktime
alwaysbest
wangwiitao
sunupdong
Jinjin680
sogatechnology
linrAx
leige635539766
tinyzh
ziwh666
YuanWenLai
V-Enzo
xingzhan0312
965682575
ccslience
PearlCoastal
JinhMa
yan0327
Socrates2001
TiankUo105
bowlofnoodles
zhangyalei1026
TimmmYang
EggEggLiu
Lllouiselao
FullStackH
edge-wzw
niuyibo0619
zengwmFE
DAXIAdaxia
freedom0123
fenghualuo
carreylife
baotao14
hibriansun
OASans
gaozizhong
limingzhu0916
Shinnost
WindOfMusic
SebastianYangCX
wangyifan2018
RocJeMaintiendrai
doMoreCode
asterqian
Zzh_Zh3nDu1
yanglr
GReyQT
naomiwufzz
494143901@qq.com
wang-hejie
liangzaiQUAN
biscuit279
guangsizhongbin
ForLittleBeauty
HouPeiyu
Lovemyse1f
XiangyDeng
xy147
comst007
yingliufilms
ozhfo
fashiontai
jin03041209
ZJP1483469269
xj-yan
AruSeito
Bingbinxu
panda-qin 
ChangYanwei
ZETAVI
KennethAlgol
littlemoon-zh
kendj-staff
Okkband
ychen8777
sxr000511
HarleysZhang
guochiscoding
ChiaJune
kbfx1234
Cartie-ZhouMo
xieyj17
ZiyangZ
wangzehan123
whitewhatpin
JiangyanLiNEU
erik7777777
biancaone
thinkfurther
zszs97
xiaoguazi
laurallalala
ruohai0925
vincentLW
iciue
Just-focus
GemZq
`);
