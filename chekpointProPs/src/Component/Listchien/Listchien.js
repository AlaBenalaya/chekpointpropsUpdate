import React from "react";
import Chien from "../chien/Chien";
import "./Listchien.css";
import Nav from "../chien/Navbar";
import Foot from "../chien/Footer";
const Listchien = () => {
  let chiens = [
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Berger Allmang",
      couleur:
        "Les chiens de berger sont bien connus pour leur docilité, leur intelligence et leur gentillesse. Ce sont des compagnons aussi bien adaptés à la vie de famille qu'à une vie plus rustique à la campagne.",
      price: "420 D",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Chien loup",
      couleur:
        "Un chien-loup issu du croisement d'un loup et d'une chienne est également désigné par le terme crocotte (du latin crocuta, qui désigne la hyène : nom commun originairement féminin et orthographié avec un seul T",
      price: "800 D",
    },
    {
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUWFxkXGRcVGRkbGhgaFR0YFxYYGBYZHiggGBslHRcXITEhJSktLi4uGB8zODMtNygtLi0BCgoKDg0OGhAQGy0iHyUtLS0rNy8tLS0rNy0rKysrKy4vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgEDCAL/xABCEAABAwIEAwUFBgQEBQUAAAABAAIDBBEFEiExBkFREyJhcYEHMpGhsUJScsHR8COS4fEUFRdiM2OCo9JDRFNUk//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAMAAgICAwADAQEAAAAAAAABAgMRBCESMSJBURNSYUIU/9oADAMBAAIRAxEAPwC8UREAREQBERAEREAREQBERAEREAREQBEWPWV0cQzSyMjHV7g0fNAZCKrMb9rzQ9zaOISsa7L2ricrjzyMGrh43F/LVdrPa0GsvLTWdyAkFvI3G/lfdAWci0HDPajA8fxYZIz4d4eG+U/JSdP7Q6B3/qub4uY+x+APzQG1ooGLjGgczOKuMNvbvHKb3t7rrHfwWbTY7TSSGJlRE94AOVr2k2POwPiPigJFERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAFG8Q4xHSU8lRJfKwXsN3E6BovzJUktP8AaxFmwyY2910Z8u+0fQlAVxj3tQrpQGQ5YCRchgu4X5FzufiAFXmKV0smYySOcT7znEkm/ieZUlO8NaZPD5dPNa892Y/M+Z5eigkkcEkcSGXs0fAcyVnVlU4O7QMuxuguDbz8VgtaYoi7mdLdOevNZEboX05eZXGXmHaD8Iaq1XiWmfI+KLGXlxNm6lduI1MbnjO2+g9w2IPW6h6wAO7mxAv4FZ2FUb3vAaLuIvY7eqltJbZVJt6RMUEokZlJLhtrv4h3j9VH4nH2LTkeQ9tiw87dL/RZuHEMe9mXK8bs8RqCP3zWBjrc2vw/MKRo3bhP2qVMTGCRwmbtlkvnFuQkGvq4OVu8L8XUtc28Mgzgd6IkZ2nnp9oeIXlqiZ6bH0JsfmD8VJYZK6Ka7SRfW40IPgRsUB6yRVt7IOJp6gT087jIYjmZI7U5XG2Unn4X13VkqSAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALAx7DhUU00B07Rjm36Ejun0Nj6LPXVUh5Y4RkB+U5S7UB1u6SBuL2QHm7D+Gp6wTRt7gp4nyyEi+rb5I/xOLTbpkd4LUqFoDgOWh1XqThvhllLSugLs75MxmltYyPeLONuQtoByA63K84YlQMiicAbnPof9rB3T63uqt6eiynab/Dh1DILG+ZhGbK02zOcCLF3UEg7WNrKNdSOkk7jTYnV1tPQqRwhxkZlI0BsPqfyCkoqRrh33nwawXsOp0Qez6jwKPsy293dfzUHS1ckUhyHUDKfRbAyiaD3JHE+OnyIWLWULSc7dHg69CRyI2R6a0x3L2iIp5nCXtJHXJvYAt3GneAN2eFwL8lkYwcwa4bO19eazgWMaS9oAGoaDoCdu6dLqPq2FzAWA5Rp6nX6BPQfbI6jcQ93l9SD+SlWm3e+CiWixF9juts4SwM1s8NMLjMSXuG7Ws993nawHi5qkgtX2L4WWUslQ4W7Z4DfwxXbf8AmL/gFYgXTS0zI2NjY0NYxoa1o2AaLAD0XcpICIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAuFyuEBg49UdnTTyXtlikd6hpIXmOpa+Vz2sb3QdXHYDbf0Xof2jS5cMqz/ynDT/AHWA+qpBjctPE1pF5CZHHwOw+YHxXPmpzpo6ePCvafr2ffDmFBtPM8e9lc0eH9/zUXhGISwyOOSzHM3cOZdbTwtf4FbXSyNERa3e2thotPqB3iAdLk25b3+qphttvZpnhJLR9VeJSTyvJjykOs0AEZm/etzU/iVEY4I3OGrhlcfHl+iwsDkdI8RudcNu5o+yCbXNuZ28lsmMU+eAtIcLAm567gDzTLlapJDDiTltld4sw9o0a2db4rYOG5maxyN7rnAG/wCF2yyMLgYGB7x2l79y2oHW3P8Aoucep2NjbLEczRILkG+lj9PzUVnm9wWnj1jas1PiKMNc5rep+BVq+wLDnFr6o5SMrob/AGg4Fp05EFoFzodhY7qocUqDLMXcrj9FafsCqg2eppy517ZmC5ynKbO062LfQFdMb8Vs48mvJ6LtXK4XKuUCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAhREBBcb4YamgqYG+8+Jwb+Id5vzAXnCStJp2XuC0hhA3FiTt1vovVZC868XcPGDEZ4G6NleJY9NBnIOnLQlw9Fnknen+GuKtbX6YVJjF2jUkOAtyHr4qMxCnrJLyRRljBrtq7xNxss7h7hd7K2Fju8e0YXMBOUDNmcHW3uxrhbldXu3Do8mXKAALWt6Ks40n0dCfkvkUTw/VtB/isMcltQR3SOo8D8j6KWq8ZaAQ0kX5l122O/jzKs3EuFqaZha6NuoIBtYtNtCCvPeIw1TXGMsygOLTa5sQbEddNVS8Pky/n4Lrsmv89cyRr4wAGkb6EgabclsNREyUTlpAzNH8Po947ztPDW3gVp+E4cXOY0d9+fQa7DUX66m58LdVtWLxmNvZsN8t8x+9Ife8rbfFYZIlXMz7L48lOKqiBlw1jADe/kurhLHDR1sVQBcNlOYX95rwWuHwcfUBdzje4GzTY66X3J8lr8rbH1JC70eaz1zhWJRVETJoXBzHi4I8NCCOTgQQRyIKzFQ3sZ4m7GrdTSOIjqbZQdhMNrdMwuPNrVfCkg5REQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAVf+1DDheKouA4AsH3r+8CD4WVgLzvx3xe6bE8+a8EDnRNaL2Lb2e4jmSR8AFnlTctI0xNK02THs/rga9wkHfkYSw6AAjdoHUjMfRWo82BHgqUfPF3aiIklrg5r2bgjUAg/QrecG9olJO3+I8QSj3mvuGk7Zmu29L3WWHL5Lv2d1Y0vXo21p5Kk+PKvLWzMis5pfrbk8gdoB1719up6Lc+JuNY2xPZRyNkncCA8e7HfTMD9p3S2nVafwnws4ubNI7M69+9y+KjLnmESsTp6RmcNURj7ziDO9oA/wCWxote/wC7la9xHjN3iCI3A0JHXmdRv5Kwq+mio4pJb3JB3tck6DdVO12W7z7x/PoseKvOnbK8ulEqJMuZtmNjadTp8dSVFVrhnsPs6LNZJd2YqKktnNiDr9V3nnGRRzFsrHAkFrgbjl4her8ArTPTQzH3nxtc633iBm+d15Kk0cr29kPFTXA0DzZ7R2kV/tNd3nsHiCc3k4/dUgs9FwuUAREQBERAEREAREQBERAEREAREQBERAEWqcXcdQUR7K3azkX7NptlB2MjtcgPIak9LaqssZ9pNc++WQR32bG0af8AU65+fogL3c4DUmw8Vgy43TNvmqYRbe8jNPmvLuLY5Uzn+PPLJ0D3uIHk29h8Fhsc4kAk23I8BugL/wAZ9q1HES2EPncObe6web3a/AFaZiXtrqb/AMKCFg/3Fzz8QW/RVVLO489OQ2HwXTCL9PVQCyP9WcSlJa10bRY3LWC48ib2WitaQ8g/PmuIyWtJuuqnrT9r4oScx1TmXDXEA7gHQ+ixf8Wc2YrKqADqsJ0SjSJVNEhFiTeiz4OI5Y/+HI4DTS+nwWvMZqu17CqfxT+F/wCa/wBJ3FuKZakNa+wDenPz6+qjpZ7hYQjtuuHvVplStIpVuntnZLUki19F1w7hfAC72NsrFTugZmeB4qTfO9kzZoXFr4nNLXDkW7H977LHpoxGzOT3j7v6r4p5bG6EnqDgviFtfSR1AGVxu2Ro+zI3Rw8uY8CFOBVh7Cq1roamMbiRj7fjblv/ANtWepIOUREAREQBERAEREAREQBERAEREAWqcd8ZR0DA0WdUSA9mzoNi9w+6PmfUiI9pPtEFEDDT5XT83HUR+n2n+Gw59FQk9fLPI6SR7nOcbuc4kk+ZP02CgnRN4hWuJdI4lz3uLiTuSdyVEwyyyPyMbqdBopGgwd0gvlNhrf8Aup2hohHrazuvmssmaYRtiw1b/wAPrCuG4Yxee738xyHl1/osbHKFrmuyNA8t7cwpKpmNiSoSqxHKDc7rinLkp7R3VhxzOmaU9pByldsEfP8Aei+qoXcXfvVfZ0jAG5XpL0eW/Z9TyWa34n12+VljSM5hTOLYS4MbI0XGUXty0UPESFE0n6JqWvYintodQu5kYdsV9CAPGnJYZzNKkqds1OQbrqdIV2NrDsRcLre9p2FkB8Eo1q7GxZtlnUdCQbvFh0/fJAYzYbC5XfQUpkeByWTMzM4AKQgs2zNrbnqpBH4i/vkHYaDyCxT4KarKMO1G/TqoqSme3UjRQSb/AOw/GBDXOhcbCoZlH42Xcz4jOPMhX8vIlLO6NwkYbPY5rmkci03B9CAvWWF1gmhimG0kbHjye0O/NSQZQRcLlAEREAREQBERAEREAREQBa1x3xMKKnJbrM+4jHTq8+A+pAUtjOLxU0ZlldYcgNXOP3WjmV5/4yxaWsndI+wLtGtBuGMGzb+tz4kql3o0xx5dmpVTpKmYgXcSSdTe99SSea3LBOGYmRh02pI2X3wthLIrPfbrrpfW6xsZxPvnJYm97jYLiyZqp+MHZjwzK8rJitxJsbBHG1oA28PNa1Njwva11B187y7vErqiFtTsk8de67LPkvep6RLTYm46bBdLacu1J1UTPWW934/ouWYs8CwProt5wtLowrOm+z7r4/4paNrD+qRi3oF0NlzPzE3v/ZZNSWs0dfXWw3t58lulpHM3t7N74WPaQgE+H9FHYxwnlfnjuWn3gBqPIdF08FYnDn7PvAu2B5nw1tdWBA9jNb3v8F5uWrxZNo9LHMZcfZVtbw/JGQY7kG1v7qOmsTlkaWu8lb7q2LMA+1nHQjr0XXinDccguQHC24W0cv8AsjG+J+MpuporC41CxYYS42AVgYpwYY+9E/T7rtQVq9NA4yOZGNfh4c11RkmltHLeOpfZ3UkWRvd0dzJ1PovsA8zc8yu+Ph+ocRodevLx8FM4fw3ILF+19uZ6fmorLC9sTit+ka/lI90XK4oaOR7wLG56cgtzw/ANbnTX977LbsPoIWt2F+ttTbZc9cyF0jonh0+2avg+AG13ktG2o363F/ku/HeHmOYSLCw8r2+q3P8AwrSALAfvosLFGsY03NtNL2+VtT8Fj/6HT6NVgSRREgLSR0/JW97JPaC0BlBUuDbd2GQ6Dwif0/2n06XrbFaqNsrzlLzfQkbehuoyesjP2XX9LfBeintHA1pnr5cqsvZDxm6dgo53ZpGtvE8m5kY3drjzc3x1I8iTZqsVCIiAIiIAiIgCKuOKvaGY79hlDGkguPekeRfRjNm/id8Fpp4/qJSGNlkZOdcheSBbl3RZYXm16WzeMHl7ei9pZWtBc4gAbkmw+K1bFOMrXbTQuldsHuGVgPXXvEfDzVU4txRVzAMlkcSOR0+gF1gyVU0TmDtC0hxB3yk3s4fK17HZZ/zVfU9Gz48Y1u3s3bFKAzP7Wd2eQ76kN8mt5AdFDDBTNJ2cMZe/o21h4uJ0HmSFgzVxOj5o8xJytaTt4kjvH0C68P4imiuGSODSdWhxAPjpudFyfLe67OxJePx6Nob7Oqh1my1MMQ+6HEu+Gn1Wk8bRUtEewhqu2na60rWx2Y3wz5veB5C/othp8XD9ybnr+9V81VBDIcz4GP8AxNBPxIV45ES9OTO+NdeqKqnqS45gFO8M8HVFYO1LmxRXt2j+dt8jNL+dwFYFJwhQuGY04/mePkCpo04ytax1mNFmgbADSwHRaVy518TBcSt/IqfiHg6SC5Y8StHQWd/Lr8lr0TWZTc6i+iuespGjdQVbhFM7VzGk+I/NTHK/SK4v9StKFt3gLapMA3c8HM46DoOV/G3JT2EYXA6RpYxto3B5sBuNWgnre2iyMRpszi7NqOn91XJyt9T0a4eIl3XZqk+CAt7oIeNQQuuLiCZvclJuOfW2mt+a3KipbC53/Sy1zirDf4uYNID9R0B6EeijDlV140W5OLwXlHRgSYk953/f5LYMJ4vkibklbmbycPzH5rXKSTK0EtGUC4+lvO6xqqrLiTltddDxJ9aORZWu9mx4pxc/7A7vP9R4rUf8zd23a87r6c881GrWccz6RlWSq9loYBxRC5oBJa7mLfnzUpV47E0WBFz4i/oqhjJGoK7JZCeZPqsa4009ms8mktFiS8RtvfPZZcWPAC4eCq8poQ4LN7IAd54b0u4C/wASsa4sM3nlUkb6eM3Wc1uptuP1ULLXT1BP8QtHRpI+J3d6lYeDYb3HFpzZjbNy08fUqYwyhykkvuVhSnG3r6OuPnKb+zV8UwCRt3auHUqF/wAC4mwBV1sa10QzN0/eq1THIYhmDQQeoXTg5Pl1Rx8jjKe5IXg+R1PU0rge8Jm6f7XENcPUEj1XpxeV6R/YzMlOuR7XeeUg2+S9SwyhzQ5puHAEHqDqF2o4WfaIikgIiIAiIgPPntHwJ9FVOEbD2UrnStfYkNBsXMJ2bZ3XlZRceJRRdmIsuctDi91ja9wST1uDysvQWIQCTRwuNrHb4KO/yWIbRsHk0LKsSr2azlc+il6J4dIzvds7ODpYk66gAclEVjXsme19wGSG7SbnrfXmRqvQbcPFrDTyWt8Rez+KqcHmWRjx9puS/wA2lUjD4ml5vPX0VNLTHPESGjQDV2obqQGtFjt5nUrPwnCpXttFDI9oJF2sc7XexdawNjzW+0fswgYQTLK4jmSy/jrlvzK3fCqFkEbYo2gNb8SeZJ5kqrw1T+Xous6ifiuyn38O1zXAMo5Set2W8r5lJQ8O14beYwwt6OL3v/liBHzVttPgviVt1ZcaCj5WT9KclxGSB1jDLK3rHFMB/K5t/qpODHw8f8CVun2o3t+RAsrL/wAOFyKcdFD40Bcm/sqTEaov2jk/kd+nksEQx2e6dzmADNlNw4tba5LdwCdB1N1c76YKqsYkEs1UDYjM2OxNtblzm7/ca3bqVSsCldF4zun2ROK4oI2RvDntjcLMiaAL/wDSNlzIcojeTZrgXEu+zlte/O+oTEoGiWNzgLROYD0GbcW56l3wWfxK6F8DTE9r3ZiABYHvaEEO5aX2K5/49+P+nUs2t/4fNRN2bWyNbmzG2UH3tCdL7aAn0UPxXVA5Nf6nr+SlMIgfURCCNwbKwghxBItqLi3IgkELJ/0skk1nq3nwjaGj0vdaYeO09v62ZZ+SmtFb4lXNGSMDa7ifM3suh1RdWr/o/Tf/ACz365mfmxfLvZBFyqJx/wDn/wCC7lOjz6rbKncea6nQgq2D7HmH/wBzL8Gf+K6z7G28quT+Vqtogq8Navt0gGgVmN9jQ/8Atv8A5G/quf8ARgc6t/oxoTQ2Vo2oawX58lm4Hw1U1xdIxpETPfmfcMHINaftOJsMo252CsSL2NxD3qiQ+jf0UrjFB/l+HmmZM97HvAY15uWk30j8+m3NUraTaLTptb9Gp18LaWJrc9o2gBuXUuOt9R+9VgOxAsdd7j2ZsG2aM2ovqpKupmmJrHXLnOytbpfuPyiw+V184lSgkMGha3M0ncm23gR/Reeo/t9tnpPK/wDn6RMQ1GZnZOeB2mkbmkgm4uB57jqteklI7pN+V+vVSWKNZeCdr2gbHU917QHt0GxNnjXoFJTcAz1UpmZNGyJ+Vze6XEgtF76gam5VsGJplORlTRW+LOLnZQdNTf8AfkvSHs7a4YZRh979gzfexFx8rLSKP2TRB7XTTSSAG5aAGtd1Bt3gPIhWrC0BoDQAAAABsANgF6CR57ezsREUkBERAEREB1vjXz2KIgHYLrMKIgOOxTIuEUA+siZERAMi5DURAcFqja7AKaU3kp4nm4N3MaTcbG9r3XCJoHRLwtRuNzTRX65R8+q4ZwtRA3/wsJI2vG028rjRETSDZnU1BFH7kbGfhaG/QLIyBEUg47MJ2aIhBx2fgnZIikDs07NEQDs1j4hg0U7cksYc297G+hHMEagrhFAIWo9ndC837FwPUSy38/eX1UcA0j25HMeRvftJL/zB10RVcpllTX2fUHs/oWkHsLkfefI76uWx09I1jQ1oAAFgByARFYg7ezXdHsiID6REQBERAf/Z",
      name: "Rottweiller",
      couleur:
        "Le Rottweiler est un chien qui a besoin de pouvoir dépenser son énergie pour être heureux. Une maison avec un jardin est un cadre de vie idéal pour lui, d’autant que comme il fait partie des chiens de catégorie 2, il n’est pas possible de le laisser courir sans laisse dans un espace public.",
      price: "650 D",
    },
    {
      image:
        "https://www.caniche.ca/wp-content/uploads/2015/08/Caniches-miniatures-blancs.jpg",
      name: "Caniche",
      couleur:
        "Le caniche est une race qui était présente en Europe depuis des siècles avant de partir à la conquête des îles britanniques, de l'Amérique du Nord, de l'Asie de l'Est et de l'Australie. Ce chien n’a jamais été le chien de compagnie de tout le monde.",
      price: "200 D",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Sloughi_sandcolor.jpg",
      name: "Sloughi",
      couleur:
        "The Sloughi (SLOO-ghee) is a classically constructed sighthound of ancient lineage, originally bred to work on such game as hare, fox, jackal, gazelle, and wild pigs on the punishing terrain of its homeland",
      price: "1000 D",
    },
    {
      image:
        "https://3.bp.blogspot.com/__HRIKfiRmp4/S8GiWnVtwpI/AAAAAAAAAi8/GrMOWyod0mA/s1600/Photo+497.jpg",
      name: "Pitbull",
      couleur:
        "Loin de son image de chien dangereux, le Pitbull est en réalité un canidé très délicat, doux et doté dune intelligence remarquable. Il se fond très bien dans un décor familier avec un maître attentionné et des enfants. Ces derniers ne doivent pas craindre un chien qui sera très heureux de jouer avec eux",
      price: "150 D",
    },
  ];

  const handelData = (name, price) => {
    alert(`this dog has the name of ${name} and has the price of ${price}`);
  };

  return (
    <div>
      <Nav />
      <h1 className="titre">List of dogs </h1>
      <div className="card">
        {chiens.map((chien, i) => (
          <Chien key={i} chien={chien} handelData={handelData} />
        ))}{" "}
      </div>
      <Foot />
    </div>
  );
};

export default Listchien;