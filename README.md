# typescript-fuzzy-search
A simple typescript function I spent way too much time on.
It searches for a string in a string array but allows it to be a very bad match.

## Fuzzy
```
// Basic functionality with long sentences
let testCase7 = ["I love to watch movies.", "I enjoy playing football.", "Cooking is my favorite pastime.", "I like to read books."];
res = fuzzyStringSearch(testCase7, "I love reading books.");
console.assert(res === "I like to read books."); // Expected: true
```

## Characters closer to the beginning are more valued
```
let testCase_5 = ["ABCD", "BCDA", "CDAB", "DABC"];
res = fuzzyStringSearch(testCase_5, "AB");
console.assert(res === "ABCD", res, " === ABCD"); // Expected: true
```

## Shorter strings are prioritized:
```
let testCase6 = ["ABCD", "B", "AB", "BCDA", "CDAB", "DABC"];
res = fuzzyStringSearch(testCase6, "AB");
console.assert(res === "AB", res, "=== AB"); // Expected: true
```


# More tests/examples

[TS Playground]([[https://]](https://www.typescriptlang.org/play?#code/AQegVGBQxsBiBXAdgYwC4EsD2Thq8AGYZIAmeAFgKbAoA2WAzlY2sALYCGaKFeBnYKwBOJAObAAFEipVSdKgEpgJYILoZWwLISFpRSMYykVOAT1acUAa0UA6aFBjAAKhU1Fk6bLhSc6KAh03CxqQihYwjSEkcBUVnwi4iq4aNTAphZoVtYANGooEcKkyfgZWADutAzMdGaOKmxcPNTGaTQycgp2runNvMCkWKFIWGymAG40ZQBGNFQAHlZsnGS0qxmcU2qkJZg4-rSmwstUwowOzm40SYbAFRhplDTuYq1sjEU0HlFoCMIycicNrpOZafoUS5OWAAAQADpwTuxNlkcr0aBotDo9AYjPwhPFhAM0sIsAg3j0ALIILRzMK3CSIk5mbTtYQPZjAJBBOgqYy-f6AqHAeGIzjIzryGjXHGlAjENaCCFESJUmlsOmCBms6jszQdHl84ACgFyYWipHrZgAZSoSEYjww20kWDh+yQ-mUAHVqGztMIuWNngTEQNGBQyXRyHS-JzmPbHVMegARKiEThBNBteX+ZjmhGWxamdVOmgut0+T3AH1UP2xUZsdohomJCNBchFjOsUt1dYBIIhcKRaKxeJh-TiHoASTYGHYcNJU2MVkCJxQLJmCDYUVICBQoThZxiwi4qCoKbTGboWfx6boeYaMJN9vRwDBTW4A0IpORTcylhsf0uUNDBdBIOEt2XKIUgmfwMFIKEQGASBCC8d1PAALwwsxrQnQxbVDChJH-bIbAALllQwAG0AF18klBQKIZfJYyoW0E0wKYAF472YfJOxLbjeKUJi8IkAAfYC6F5ABvaBQCQgA1M5QIwPx0OxcCtzwMxD0YeTQKkNBdKobEGJoABCLiuOAAAiBlbOAcTJIsgBBYRmTsTR3OZYjzAA2wnJckicjsKgpmEMxJBoLiAD4dMPbEYusuyHMUZQ5OALLjVrQUpLoABueSAF9IHk8BYHk5xEFQdCyj8ftgjQGhBFQrCWU+YcVQDMRS1wBkLiq2BrS+FIUCiYFQgeJ5FmWI4xXQM4OE-Vo1DWUgqHG+JmGMaa+HYTQIRYHoAAkMDeJbOugjw5jQZrhEuLLYWfEFogQdqhDnDBglEYyh2g26KlkVIKgIAbHpgJD5Iie02Da7CRq6my-LMUTcXo2QpTR8RFAo7l2DmAM4uATLsoUNgHjISpscMfIrpi4AAAY6eauFgBs8y7AUQw0nyA7cBsxmiqqlRdBR9mUvMjKRay59gAARkZqgADYiuy4BiuQkXDMkCyBO7KZpfVrL+fZ4BKW4SFCAYSJJFYKg4RAAAmRQRdKqqRZAJCZzOQcsAi4NzMosR8h3PdkkeYwHQwmg9riCKWUeX33RF48pAK+22fi-mCr0B2AFp86N4208kcmVDN5muTN-P5dzymhiqDnMe6RgNH3SQMBZh3FFzjAAGp++L43aBwLEowAfQFrkZey6fMi8shFgAeUISQG8qejgH7hXe9nrKveARHruMEgtsm6MOtZ0XlpaI0YmQUh8g28-mEvhWb4bfeb+kYBYsF4eI8FLBhKIQQgZw7T7jfLWIGdpgyLEPItcgDB1I+DWuQCavIUHcDQWkbgyEgHZUPi-CaO03wX20LgCMVR0wBm-FgX86RLDCDYNiP85hg6ND5BDIB9Nt7IywJPJA+ckCKBAJ3fu8tlDf01lQe8NBSaEMPo8AA5MYW690b5AyICQcgFRTAUyoCo6CNtrDJDTvgjYhINCXWvowAgTZ6bfwPkhEh21QjsC6vouB2ihhIBUXDXRQgGG1ncHcVQTY5i9SQEgZImdjB2zsdkFhy42DczEE8MyLcbhiVdoQrKfD842UzjI7+Os+HxUZoAkecsnGENKiPBp2V3bq1qV8NWGsyouOAGor4jAVHaBmAAK02h8fAURjBjj4JkRoVBkT+BwBIOO7QMB0PegjL4j1D4AGEcARUwHcGZqxyBBzKAwIGRJJo31YuxB0nFvjGGEo9GGWh6bGBsiFGwdgw77gADwACVNqRFIL85iwECZnFirFSQkgVz5EyMoYmijgDlwXFgfcjA34nQ4TZG5do7mlmAAAfhRMACiC98AABlKhnG2ZNSQe91aotJBit+AA5bJZs8UcUJSSoOeNsl2CpTS4QdLmAMuFurFcVFMg0TNvDHCXxJBotZXIbFZh8gqpYOy7JjLsoizliuDpxV8gyWKnvLpo9YbQNYBbO+Hz-KkWsN8uQe4qAwoXOFFi-xhCIvisi8uE9PUTC5ZNW5iYaAkuDWS4AwahVYGpRcsV7q9VZUDauImVo2L4ojcS2gPqY0ZvjYm2l9KLXqx2RGJg0wmFiXuI8Pgf5zrvH+ueYAU5fBXLYRgKgLEq2ckcRGFhtjcTazFm8qiwa5XxQnRmuVzkpCtsYJOqIExp1LqonO4AAAybdwAg2rq5naDJfBfk2QnkW9JaR0ok1nnLYNHSsqawNblAE+aPLGvLTlP4b73x2t4EVd25cJk0wkvlM2tlbJlReSsaSlLVhiAQJwMQoQbJUVspwQgtl8j2QAI7YbsoifO1pXIEYw8IfOU4ACKZGiMAFEADitGKOUoAJrMfzsmAAWhxykpGcNEZcGyjjy9KTYegOR-OrG6McetOxgTFGABSy8OOUoAEIcYANJeg465GTCn85qZOhxqj-G7JUAQGRmYYhxN2TmGRvwZGMIUHzi4HTOHnP522cJjzLmTqaacy560TGcMUGEA5xgZHSCcDI0gOgsW6CGf0+ZpAtnbJ2nzgAVWtGRjLjHcvCNcplgr+cGMaZwxl7ZZn0vCLZTxirwipzJZq-nLj1WMuKbE7kCTGW1P1ZS65lwuW0BkZiKNmLOHiCjfC5Nijanmvfi89Vxb2zjOzfzpS4r3W7JiFIGR3blHmsbSi1QLza27IbXzq5IbOHLubZOxtqcuX4uhaoGR9w73LP5Ak5oMj8E-sjZw48M7ZGhkTbstYLAZG6ATGh4Duy7BrBkfYPD2yowyNwhexJt0hn-kY9RyeMjpIidYHzpSFTOHhBfbslTsnT2cOMAwmRxgM3UpI4Zy91KMw0ssFy4wK7eOKv84Yzd8z-PtmC7F-nAACu1-nyYKdS8pAADT5-nRSzWWBecVz1-n0vNf87o9stX2zKVq8y-JqX0vLfpf52pxXtviOKTVydHzUu2X04IY76Xkv7ILGZ7DhnEx85wE97ZNIZGsyR9Szh-QZGEDs7sv8MjUwU8YDIwsCgaWhnp489T+ysOaLC0gDBvALA2DIwVbhXEBEWwURqt4HAfrb2HzU8CNSnhaqVg0MZSA5dmqsGTfLM26HOBwkx29nDMxVgz7I5EBDk+7JwhIPEcfChbJF8gBM+V6ycJiVr7wSQA+0BD4E2vt7e8vYvMEeeYEzAWGSG39ZGyGHz8EYmb3YBdGFiIOaqQCi+gCAVAZUh8y8xQS02I5M90xgQwLA-iH4d0ZwfetYZeg+k0TsI+BezO-uQeIeYeWu1ozum+T+mECM++hIh+x+yaTsuB1oMml+IA1+3Qd+ZwaAj+qGKUBeeB7+LAOGz+Qgweoetkn+h83+v+cgABVOwBkAh8bKOA+crEBIPK2wEIyBjY5eyaAAzJgcmFgDZjhnSqjmpqsntjhnAJoFnsQahqQXvjXhQURFQZNJobdnocIUVFfmPDfnYCwQ-k-pwbofoTlIwCIUhGIaMhIXgFISAaEZnl2Pcs2AMPnObF1CuP8IOMqOFD4g2jsHsN3iirWNAWoagSfpNBPAAKyYGuRqbbLJhkbVHJjVY1FVFkYNHVEb5FQkFV7kGERH4aGlFlE4bNEMFMG36YqsHsHvKcFVE1E8GMA4YSw2TTG1EhHABhFIKSFAHRFZTS6iCRCOgxzQKIEBjHJCBDqaIDRFGOHMDKyVH1F1FkbNE4b1GNGtEtHTHtFb7WFdF2E9FXEqyDEabDGeHMFjG+EcEv6PFBF8EpRDG5yiE-7hH-6RGbEyHexICwQaDkBaQ3hJGfLWBGgNhrRqAeTmCfHvI2HV7iAH5ES2TUDSRQ6hZuGokjHeGglsF+Ecw8ihy8F2QLH5RuFf4InrHInSGHwdoYnwQpAQQ4lcicoeCElahiRkk77tSUn4T2GSDoaWH5CAFKDuGMHAmjH37sngn5TclzHAArFrF-4bGilIRt4OgoCd6N4eg94shxwMB3DxjNRnj6T959HMAADsmBU4KK-s0wBAFQK0HA-sPaFwZGoZdoQyWALImO5g5iWAYw0+0kdgZGuyWAZi4Sxg7ALI6YEwexzUsawImA7A54CZKKGA1gEZOUnA0YmZ1g8ZVh5J3xVJGpfxgZOGoZDA2wE0JQdwMw7Z8ZQJ9oXhPhJpkxL+Q5jZzZo5b4k5uZ5pg5DZTZ+Iq5E5BZU5cJMR4hSJupWxya+cJA8YBKKh0Zqg3pkCLAlxAZVAAAHDoTgAErQJFNAn4DSN8GgGotoBFHTAdAoL+V2ABZsOPnaGaAmakGFrIPcMCsYKGX4P1AgMiAgGzJkZFGkMkFOCotsAoIiICGoBOdpBoOAhRI8MAGIMMMYDgLmV2SqWQT8S2L0WgcwK+S4fAcABLqxhBf+Y0EBcvBrv8vkNaJSFOJSnRkJZyLRaYDBUKEyR4TOSCcaRMXybZLoXxeNBuJtJBSJYxSBUIGBTQHMH+QpeMGPoeCpeaVaUKTaSKVsS4OXvWk8IwIghgIcLwAtNASkMGHiegrKV0MAf6VxVQAAJyYFyz5xOxgCkhjAFQOaGlcx6GSAbTXicCKCjZoRoL2Iw4poyQaxkYlVNmozAAYlAGlU0TKk2Q9nqm-EvlRWU6vq4CZVyLZB-wAJ5rxWJWZlsAUQskMBiCdXZW9yqUGnqVGnjEcl2QjUZVZXZC5U4aLVjXLU5ULGzGOUnm2muXuVxyeLQR4K4A4A0BwhMAOgzDgVHQWlxwnF7RkhsD6zxHMCETPmRWKwj7yS2SuTtq6BmBkiDCflsDWCjBVDeLQRA0IDGI0D0XiD5CrAsikitkqLSR4CcA7kw3PBRAEa-VqYA3AA41+Jfng2VD3C6g0A41RlICNgED0U6nUC4C0WwGMB8XNCaL6JqR8AIhPA43ZBNnMUdFfG75qliDUmcUlHMCKyDmA3A2k1g0Q2U0QLE1khw10VYCI1rQo1YCtn1oY0oZsAC1U25nTmFWzVgkLl2T-VTjy0IAg18Xk2Q1U1q2w3QQI20w63Gh62kDo28iC3U3A1sgX5HmrFOURFnn1UUndEcV-Gy12TtAs1sBs0c3cD3Rm36kslzlaX8G2SE121u2O1k3K1Q1B0O20302a1M1wKs0MVp1HGU081Vn83B1Y11m7WIn7XuzyTH4wp4mga0QYxhWgbN6NUS0al4nD1Sj5DCQ6lSHpSWpex90owBSD10ShVYzBxj1i2x2H5T2b0KCL0l5pU1nuq2QKpMmlywQBgYCVx9zAC-IKxKxOx9yDzFyyFjA1r4L4WMUyAG28hcA7nnVqBslEC5gWWGXCWqLGCEmvWli93l792Oo5Dr3T2MTb3szxTj2S0H1SyuylQsln10ZkCSAX275MnQan1zjn0KpxCxGCSh0oSxCSA30VyCwP1P2KxUCv0qDv23pZQr0D3BxD2H1UCj1YMx3sX70oM2DoO9rgPyLz1AGL2EPUO1kkOkBkN0PwOp69xAA)https://www.typescriptlang.org/play?#code/AQegVGBQxsBiBXAdgYwC4EsD2Thq8AGYZIAmeAFgKbAoA2WAzlY2sALYCGaKFeBnYKwBOJAObAAFEipVSdKgEpgJYILoZWwLISFpRSMYykVOAT1acUAa0UA6aFBjAAKhU1Fk6bLhSc6KAh03CxqQihYwjSEkcBUVnwi4iq4aNTAphZoVtYANGooEcKkyfgZWADutAzMdGaOKmxcPNTGaTQycgp2runNvMCkWKFIWGymAG40ZQBGNFQAHlZsnGS0qxmcU2qkJZg4-rSmwstUwowOzm40SYbAFRhplDTuYq1sjEU0HlFoCMIycicNrpOZafoUS5OWAAAQADpwTuxNlkcr0aBotDo9AYjPwhPFhAM0sIsAg3j0ALIILRzMK3CSIk5mbTtYQPZjAJBBOgqYy-f6AqHAeGIzjIzryGjXHGlAjENaCCFESJUmlsOmCBms6jszQdHl84ACgFyYWipHrZgAZSoSEYjww20kWDh+yQ-mUAHVqGztMIuWNngTEQNGBQyXRyHS-JzmPbHVMegARKiEThBNBteX+ZjmhGWxamdVOmgut0+T3AH1UP2xUZsdohomJCNBchFjOsUt1dYBIIhcKRaKxeJh-TiHoASTYGHYcNJU2MVkCJxQLJmCDYUVICBQoThZxiwi4qCoKbTGboWfx6boeYaMJN9vRwDBTW4A0IpORTcylhsf0uUNDBdBIOEt2XKIUgmfwMFIKEQGASBCC8d1PAALwwsxrQnQxbVDChJH-bIbAALllQwAG0AF18klBQKIZfJYyoW0E0wKYAF472YfJOxLbjeKUJi8IkAAfYC6F5ABvaBQCQgA1M5QIwPx0OxcCtzwMxD0YeTQKkNBdKobEGJoABCLiuOAAAiBlbOAcTJIsgBBYRmTsTR3OZYjzAA2wnJckicjsKgpmEMxJBoLiAD4dMPbEYusuyHMUZQ5OALLjVrQUpLoABueSAF9IHk8BYHk5xEFQdCyj8ftgjQGhBFQrCWU+YcVQDMRS1wBkLiq2BrS+FIUCiYFQgeJ5FmWI4xXQM4OE-Vo1DWUgqHG+JmGMaa+HYTQIRYHoAAkMDeJbOugjw5jQZrhEuLLYWfEFogQdqhDnDBglEYyh2g26KlkVIKgIAbHpgJD5Iie02Da7CRq6my-LMUTcXo2QpTR8RFAo7l2DmAM4uATLsoUNgHjISpscMfIrpi4AAAY6eauFgBs8y7AUQw0nyA7cBsxmiqqlRdBR9mUvMjKRay59gAARkZqgADYiuy4BiuQkXDMkCyBO7KZpfVrL+fZ4BKW4SFCAYSJJFYKg4RAAAmRQRdKqqRZAJCZzOQcsAi4NzMosR8h3PdkkeYwHQwmg9riCKWUeX33RF48pAK+22fi-mCr0B2AFp86N4208kcmVDN5muTN-P5dzymhiqDnMe6RgNH3SQMBZh3FFzjAAGp++L43aBwLEowAfQFrkZey6fMi8shFgAeUISQG8qejgH7hXe9nrKveARHruMEgtsm6MOtZ0XlpaI0YmQUh8g28-mEvhWb4bfeb+kYBYsF4eI8FLBhKIQQgZw7T7jfLWIGdpgyLEPItcgDB1I+DWuQCavIUHcDQWkbgyEgHZUPi-CaO03wX20LgCMVR0wBm-FgX86RLDCDYNiP85hg6ND5BDIB9Nt7IywJPJA+ckCKBAJ3fu8tlDf01lQe8NBSaEMPo8AA5MYW690b5AyICQcgFRTAUyoCo6CNtrDJDTvgjYhINCXWvowAgTZ6bfwPkhEh21QjsC6vouB2ihhIBUXDXRQgGG1ncHcVQTY5i9SQEgZImdjB2zsdkFhy42DczEE8MyLcbhiVdoQrKfD842UzjI7+Os+HxUZoAkecsnGENKiPBp2V3bq1qV8NWGsyouOAGor4jAVHaBmAAK02h8fAURjBjj4JkRoVBkT+BwBIOO7QMB0PegjL4j1D4AGEcARUwHcGZqxyBBzKAwIGRJJo31YuxB0nFvjGGEo9GGWh6bGBsiFGwdgw77gADwACVNqRFIL85iwECZnFirFSQkgVz5EyMoYmijgDlwXFgfcjA34nQ4TZG5do7mlmAAAfhRMACiC98AABlKhnG2ZNSQe91aotJBit+AA5bJZs8UcUJSSoOeNsl2CpTS4QdLmAMuFurFcVFMg0TNvDHCXxJBotZXIbFZh8gqpYOy7JjLsoizliuDpxV8gyWKnvLpo9YbQNYBbO+Hz-KkWsN8uQe4qAwoXOFFi-xhCIvisi8uE9PUTC5ZNW5iYaAkuDWS4AwahVYGpRcsV7q9VZUDauImVo2L4ojcS2gPqY0ZvjYm2l9KLXqx2RGJg0wmFiXuI8Pgf5zrvH+ueYAU5fBXLYRgKgLEq2ckcRGFhtjcTazFm8qiwa5XxQnRmuVzkpCtsYJOqIExp1LqonO4AAAybdwAg2rq5naDJfBfk2QnkW9JaR0ok1nnLYNHSsqawNblAE+aPLGvLTlP4b73x2t4EVd25cJk0wkvlM2tlbJlReSsaSlLVhiAQJwMQoQbJUVspwQgtl8j2QAI7YbsoifO1pXIEYw8IfOU4ACKZGiMAFEADitGKOUoAJrMfzsmAAWhxykpGcNEZcGyjjy9KTYegOR-OrG6McetOxgTFGABSy8OOUoAEIcYANJeg465GTCn85qZOhxqj-G7JUAQGRmYYhxN2TmGRvwZGMIUHzi4HTOHnP522cJjzLmTqaacy560TGcMUGEA5xgZHSCcDI0gOgsW6CGf0+ZpAtnbJ2nzgAVWtGRjLjHcvCNcplgr+cGMaZwxl7ZZn0vCLZTxirwipzJZq-nLj1WMuKbE7kCTGW1P1ZS65lwuW0BkZiKNmLOHiCjfC5Nijanmvfi89Vxb2zjOzfzpS4r3W7JiFIGR3blHmsbSi1QLza27IbXzq5IbOHLubZOxtqcuX4uhaoGR9w73LP5Ak5oMj8E-sjZw48M7ZGhkTbstYLAZG6ATGh4Duy7BrBkfYPD2yowyNwhexJt0hn-kY9RyeMjpIidYHzpSFTOHhBfbslTsnT2cOMAwmRxgM3UpI4Zy91KMw0ssFy4wK7eOKv84Yzd8z-PtmC7F-nAACu1-nyYKdS8pAADT5-nRSzWWBecVz1-n0vNf87o9stX2zKVq8y-JqX0vLfpf52pxXtviOKTVydHzUu2X04IY76Xkv7ILGZ7DhnEx85wE97ZNIZGsyR9Szh-QZGEDs7sv8MjUwU8YDIwsCgaWhnp489T+ysOaLC0gDBvALA2DIwVbhXEBEWwURqt4HAfrb2HzU8CNSnhaqVg0MZSA5dmqsGTfLM26HOBwkx29nDMxVgz7I5EBDk+7JwhIPEcfChbJF8gBM+V6ycJiVr7wSQA+0BD4E2vt7e8vYvMEeeYEzAWGSG39ZGyGHz8EYmb3YBdGFiIOaqQCi+gCAVAZUh8y8xQS02I5M90xgQwLA-iH4d0ZwfetYZeg+k0TsI+BezO-uQeIeYeWu1ozum+T+mECM++hIh+x+yaTsuB1oMml+IA1+3Qd+ZwaAj+qGKUBeeB7+LAOGz+Qgweoetkn+h83+v+cgABVOwBkAh8bKOA+crEBIPK2wEIyBjY5eyaAAzJgcmFgDZjhnSqjmpqsntjhnAJoFnsQahqQXvjXhQURFQZNJobdnocIUVFfmPDfnYCwQ-k-pwbofoTlIwCIUhGIaMhIXgFISAaEZnl2Pcs2AMPnObF1CuP8IOMqOFD4g2jsHsN3iirWNAWoagSfpNBPAAKyYGuRqbbLJhkbVHJjVY1FVFkYNHVEb5FQkFV7kGERH4aGlFlE4bNEMFMG36YqsHsHvKcFVE1E8GMA4YSw2TTG1EhHABhFIKSFAHRFZTS6iCRCOgxzQKIEBjHJCBDqaIDRFGOHMDKyVH1F1FkbNE4b1GNGtEtHTHtFb7WFdF2E9FXEqyDEabDGeHMFjG+EcEv6PFBF8EpRDG5yiE-7hH-6RGbEyHexICwQaDkBaQ3hJGfLWBGgNhrRqAeTmCfHvI2HV7iAH5ES2TUDSRQ6hZuGokjHeGglsF+Ecw8ihy8F2QLH5RuFf4InrHInSGHwdoYnwQpAQQ4lcicoeCElahiRkk77tSUn4T2GSDoaWH5CAFKDuGMHAmjH37sngn5TclzHAArFrF-4bGilIRt4OgoCd6N4eg94shxwMB3DxjNRnj6T959HMAADsmBU4KK-s0wBAFQK0HA-sPaFwZGoZdoQyWALImO5g5iWAYw0+0kdgZGuyWAZi4Sxg7ALI6YEwexzUsawImA7A54CZKKGA1gEZOUnA0YmZ1g8ZVh5J3xVJGpfxgZOGoZDA2wE0JQdwMw7Z8ZQJ9oXhPhJpkxL+Q5jZzZo5b4k5uZ5pg5DZTZ+Iq5E5BZU5cJMR4hSJupWxya+cJA8YBKKh0Zqg3pkCLAlxAZVAAAHDoTgAErQJFNAn4DSN8GgGotoBFHTAdAoL+V2ABZsOPnaGaAmakGFrIPcMCsYKGX4P1AgMiAgGzJkZFGkMkFOCotsAoIiICGoBOdpBoOAhRI8MAGIMMMYDgLmV2SqWQT8S2L0WgcwK+S4fAcABLqxhBf+Y0EBcvBrv8vkNaJSFOJSnRkJZyLRaYDBUKEyR4TOSCcaRMXybZLoXxeNBuJtJBSJYxSBUIGBTQHMH+QpeMGPoeCpeaVaUKTaSKVsS4OXvWk8IwIghgIcLwAtNASkMGHiegrKV0MAf6VxVQAAJyYFyz5xOxgCkhjAFQOaGlcx6GSAbTXicCKCjZoRoL2Iw4poyQaxkYlVNmozAAYlAGlU0TKk2Q9nqm-EvlRWU6vq4CZVyLZB-wAJ5rxWJWZlsAUQskMBiCdXZW9yqUGnqVGnjEcl2QjUZVZXZC5U4aLVjXLU5ULGzGOUnm2muXuVxyeLQR4K4A4A0BwhMAOgzDgVHQWlxwnF7RkhsD6zxHMCETPmRWKwj7yS2SuTtq6BmBkiDCflsDWCjBVDeLQRA0IDGI0D0XiD5CrAsikitkqLSR4CcA7kw3PBRAEa-VqYA3AA41+Jfng2VD3C6g0A41RlICNgED0U6nUC4C0WwGMB8XNCaL6JqR8AIhPA43ZBNnMUdFfG75qliDUmcUlHMCKyDmA3A2k1g0Q2U0QLE1khw10VYCI1rQo1YCtn1oY0oZsAC1U25nTmFWzVgkLl2T-VTjy0IAg18Xk2Q1U1q2w3QQI20w63Gh62kDo28iC3U3A1sgX5HmrFOURFnn1UUndEcV-Gy12TtAs1sBs0c3cD3Rm36kslzlaX8G2SE121u2O1k3K1Q1B0O20302a1M1wKs0MVp1HGU081Vn83B1Y11m7WIn7XuzyTH4wp4mga0QYxhWgbN6NUS0al4nD1Sj5DCQ6lSHpSWpex90owBSD10ShVYzBxj1i2x2H5T2b0KCL0l5pU1nuq2QKpMmlywQBgYCVx9zAC-IKxKxOx9yDzFyyFjA1r4L4WMUyAG28hcA7nnVqBslEC5gWWGXCWqLGCEmvWli93l792Oo5Dr3T2MTb3szxTj2S0H1SyuylQsln10ZkCSAX275MnQan1zjn0KpxCxGCSh0oSxCSA30VyCwP1P2KxUCv0qDv23pZQr0D3BxD2H1UCj1YMx3sX70oM2DoO9rgPyLz1AGL2EPUO1kkOkBkN0PwOp69xAA)
```
let res: string | null = ""

const allLanguages = ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
 "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
 "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
 "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
 "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
 "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu", 
 "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
 "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
 "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
 "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
 "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
 "ji", "zu", "sv"];


const test = (fuzzyStringSearch: Function) => {
// Basic functionality
let testCase1 = ["apple", "banana", "orange", "pineapple"];
res = fuzzyStringSearch(testCase1, "apple");
console.assert(res === "apple", res); // Expected: true

// Order of letters doesn't matter
let testCase2 = ["sv", "sx", "sv-FI", "es-SV"];
res = fuzzyStringSearch(testCase2, "sv-SE");
console.assert(res === "sv-FI", res, "=== sv-FI"); // Expected: true

// Non-case sensitive match
let testCase3 = ["Dog", "Cat", "Bird", "Fish"];
res = fuzzyStringSearch(testCase3, "dog");
console.assert(res === "Dog", res); // Expected: true

// Exhaustive search - More accurate match even with additional letters
let testCase_5 = ["ABCD", "BCDA", "CDAB", "DABC"];
res = fuzzyStringSearch(testCase_5, "AB");
console.assert(res === "ABCD", res, " === ABCD"); // Expected: true

//  Prioritize better and shorter strings
let testCase6 = ["ABCD", "B", "AB", "BCDA", "CDAB", "DABC"];
res = fuzzyStringSearch(testCase6, "AB");
console.assert(res === "AB", res, "=== AB"); // Expected: true

// Invalid inputs - haystack is not an array
res = fuzzyStringSearch("hello", "h");
console.assert(res === null, res, " === null"); // Expected: true

// Invalid inputs - needle is not a string
res = fuzzyStringSearch(["h"], true);
console.assert(res === null, res, ); // Expected: true

// Basic functionality with long sentences
let testCase7 = ["I love to watch movies.", "I enjoy playing football.", "Cooking is my favorite pastime.", "I like to read books."];
res = fuzzyStringSearch(testCase7, "I love reading books.");
console.assert(res === "I like to read books.", res, "I like to read books."); // Expected: true

// Case-insensitive match in sentences
let testCase8 = ["Don't cry because it's over, smile because it happened.", "In three words I can sum up everything I've learned about life: it goes on."];
res = fuzzyStringSearch(testCase8, "don't CRY because it's OVER, SMILE because it happened.");
console.assert(res === "Don't cry because it's over, smile because it happened.", res); // Expected: true

// Test with special characters in the haystack and needle
let testCase9 = ["return -2*root;", "console.log(delta)", "function solve(){ }", "{ key: value }"]
res = fuzzyStringSearch(testCase9, "return (delta >= 0) ? -2*root : console.log(delta);");
console.assert(res === "console.log(delta)", "console.log(delta) ===", res); // Expected: true

// Test with more than one possible matches, with and without exhaustive search
let testCase10 = [
  "A If you don't know where you're going, any road'll take you there", 
  "B If you don't know where you want to go, then it doesn't matter which path you take."];
res = fuzzyStringSearch(testCase10, "If you don't know where you're going, any road will get you there.");
console.assert(res === "A If you don't know where you're going, any road'll take you there"); // Expected: true

res = fuzzyStringSearch(testCase10, "then it doesn't matter.");
console.assert(res === "B If you don't know where you want to go, then it doesn't matter which path you take."); // Expected: true
}


console.time("fuzzy");
for (var i = 0; i < 10e2; i++) {
  // Note that this one will make one assert false because it's not exhaustive
  test((haystack: string[], needle: string) => fuzzyStringSearch(haystack, needle))
}
console.timeEnd("fuzzy");


console.time("fuzzy exhaustive");
for (var i = 0; i < 10e2; i++) {
  test((haystack: string[], needle: string) => fuzzyStringSearch(haystack, needle, false, true))
}
console.timeEnd("fuzzy exhaustive");; i++) {
  test((haystack: string[], needle: string) => fuzzyStringSearch(haystack, needle, false, true))
}
console.timeEnd("fuzzy exhaustive");
```
