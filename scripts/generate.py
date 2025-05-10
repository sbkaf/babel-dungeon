#!/usr/bin/env python3
import sys


def main():
    if len(sys.argv) != 5:
        print("""Usage:\n\ngenerate SOURCE DEST START COUNT""")
        return

    source = sys.argv[1]
    dest = sys.argv[2]
    start = int(sys.argv[3])
    count = int(sys.argv[4])

    sentences = {}
    meanings = {}
    with open(source) as fd:
        for line in fd.readlines():
            row = line.strip().split("\t")
            id = int(row[0])
            sentences[id] = row[1]
            meanings.setdefault(id, []).append(row[3])

    print(f"TOTAL: {len(sentences)}")

    with open(dest, "w") as f:
        f.write("export const SENTENCES = `")
        count2 = 0
        for id, sen in list(sorted(sentences.items()))[start:count]:
            count2 += 1
            f.write(f"{sen}\t{'|'.join(meanings[id])}".replace("`", "\`"))
            if count2 != count:
                f.write("\n")
        f.write('`.split("\\n");\n')


if __name__ == "__main__":
    main()
