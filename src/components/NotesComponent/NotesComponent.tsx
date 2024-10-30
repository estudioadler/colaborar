"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Edit, ImageUp, Pencil, Trash2, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Note {
  id: string;
  content: string;
  createdAt: Date;
  imageName?: string;
}

export default function NotesComponent() {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [imageName, setImageName] = useState("");

  const handleSendNotes = () => {
    if (editingNote) {
      setSavedNotes(
        savedNotes.map((note) =>
          note.id === editingNote
            ? { ...note, content: notes, imageName, createdAt: new Date() }
            : note
        )
      );
      setEditingNote(null);
    } else {
      const newNote: Note = {
        id: crypto.randomUUID(),
        content: notes,
        imageName: imageName || undefined,
        createdAt: new Date(),
      };
      setSavedNotes([newNote, ...savedNotes]);
    }
    setNotes("");
    setImageName("");
  };

  const handleEdit = (note: Note) => {
    setNotes(note.content);
    setImageName(note.imageName || "");
    setEditingNote(note.id);
  };

  const handleDelete = (noteId: string) => {
    setSavedNotes(savedNotes.filter((note) => note.id !== noteId));
  };

  const handleCancel = () => {
    setNotes("");
    setImageName("");
    setEditingNote(null);
  };

  const handleImageNameClear = () => {
    setImageName("");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          Anotações
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            {editingNote ? "Editar Anotação" : "Adicionar Anotação"}
          </h3>
          <Textarea
            placeholder="Digite sua anotação aqui..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-between">
            <Button variant="outline" size="sm" onClick={() => setNotes("")}>
              Limpar
            </Button>
            <div className="flex items-center gap-1">
            <Button variant="outline" size="icon">
              <ImageUp className="h-4 w-4" />
            </Button>
              <Button variant="outline" size="sm" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button 
                size="sm" 
                onClick={handleSendNotes}
                disabled={!notes.trim()}
              >
                {editingNote ? "Atualizar" : "Salvar Anotação"}
              </Button>
            </div>
          </div>

          {savedNotes.length > 0 && (
            <>
              <Separator className="my-4" />
              <div className="space-y-4">
                <h4 className="font-medium">Anotações Salvas</h4>
                {savedNotes.map((note) => (
                  <Card key={note.id} className="flex">
                    <div className="border-r p-1.5 card-header rounded-t-lg" />
                    <div className="flex flex-col">
                    <CardHeader>
                      <CardDescription className="text-xs">
                        {new Date(note.createdAt).toLocaleString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm whitespace-pre-wrap">{note.content}</p>
                      {note.imageName && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Imagem: {note.imageName}
                        </p>
                      )}
                    </CardContent>
                    </div>
                    <CardFooter>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4"
                          onClick={() => setEditingNote(note.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4"
                          onClick={() => handleDelete(note.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
  
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </>
          )}

          <p className="text-sm text-muted-foreground">
            Tem alguma dúvida? Entre em contato com o{" "}
            <a href="#" className="text-primary hover:underline">
              suporte
            </a>{" "}
            ou consulte nossa{" "}
            <a href="#" className="text-primary hover:underline">
              documentação
            </a>
            .
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}